var Adam_prefs = []
var Eve_prefs = []

function display_name() {
    var info_div = document.getElementById("info");

    if (localStorage.user == "Adam") {
        info_div.innerHTML = "Adam Smith"
    }
    if (localStorage.user == "Eve") {
        info_div.innerHTML = "Eve Carpenter"
    }
}

function buildPrefList() {
    var foodsList = document.getElementById("PrefList");
    var User_prefs = getUserPrefs()
    if (foodsList != null) {
        foodsList.innerHTML = "";
        for (var i=0; i<User_prefs.length; i++) {
            var availability = check_available(User_prefs[i])
            var list_item_a = document.createElement('a');
            list_item_a.href = "#";

            list_item_a.innerHTML = `
            <div class="list_item">
                <img src="${foods[User_prefs[i]].img_src}"></img>
                <div class="food_name">${foods[User_prefs[i]].food_name}</div>
                <img id="remove_icon" src="img/remove.png" onclick="call_toggle_fav(${User_prefs[i]})"></img>
                <div class="availability">${availability}</div>
            </div>
            `;

            foodsList.appendChild(list_item_a)
        }

        var list_item_a = document.createElement('a');
        list_item_a.href = "food_search.html";

        list_item_a.innerHTML = `
        <div class="list_item" id="add-food">
            <img src="img/add.png"></img>
            <div id="add-food-text">Add Favorite Food</div>
        </div>
        `;

        foodsList.appendChild(list_item_a)

    }
}

function call_toggle_fav(id) {
    toggle_fav(id)
    buildPrefList()
}

function init() {
    display_name()
    if (localStorage.Adam_prefs == undefined) {
        localStorage.Adam_prefs = JSON.stringify(Adam_prefs)
    }
    if (localStorage.Eve_prefs == undefined) {
        localStorage.Eve_prefs = JSON.stringify(Eve_prefs)
    }
}

function clear_cookies() {
    localStorage.removeItem("Adam_prefs")
    localStorage.removeItem("Eve_prefs")
}

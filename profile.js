var Adam_prefs = [
    {
        food_name : "Burger",
        img_src : "img/burger.png",
        loc_info : []
    },
    {
        food_name : "Pizza",
        img_src : "img/pizza.png",
        loc_info : []
    }
];

var Eve_prefs = [
    {
        food_name : "Taco",
        img_src : "img/taco.png",
        loc_info : []
    },
    {
        food_name : "Cookies",
        img_src : "img/cookies.png",
        loc_info : []
    }
];

function display_name() {
    var info_div = document.getElementById("info");
    var name = document.createElement('p')

    if (localStorage.user == "Adam") {
        name.innerHTML = "Adam Smith"
    }
    if (localStorage.user == "Eve") {
        name.innerHTML = "Eve Carpenter"
    }

    info_div.appendChild(name)
}

function buildPrefList() {
    var foodsList = document.getElementById("PrefList");
    var User_prefs = getUserPrefs()
    if (foodsList != null) {
        for (var i=0; i<User_prefs.length; i++) {
            var list_item_a = document.createElement('a');
            list_item_a.href = "#";

            list_item_a.innerHTML = `
            <div class="list_item">
                <img src="${User_prefs[i].img_src}"></img>
                <div class="food_name">${User_prefs[i].food_name}</div>
            </div>
            `;

            foodsList.appendChild(list_item_a)
        }

        var list_item_a = document.createElement('a');
        list_item_a.href = "main_page.html";

        list_item_a.innerHTML = `
        <div class="list_item" id="add-food">
            <img src="img/add.png"></img>
        </div>
        `;

        foodsList.appendChild(list_item_a)

    }
}

function getUserPrefs() {
    if (localStorage.user == "Adam") {
        return JSON.parse(localStorage.Adam_prefs)
    }
    if (localStorage.user == "Eve") {
        return JSON.parse(localStorage.Eve_prefs)
    }
}

function init() {
    display_name()
    localStorage.removeItem("Adam_prefs")
    localStorage.removeItem("Eve_prefs")
    if (localStorage.Adam_prefs == undefined) {
        localStorage.Adam_prefs = JSON.stringify(Adam_prefs)
    }
    if (localStorage.Eve_prefs == undefined) {
        localStorage.Eve_prefs = JSON.stringify(Eve_prefs)
    }
}

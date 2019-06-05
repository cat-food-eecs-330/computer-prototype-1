function searchFilter(array) {
    var input = document.getElementById("search_bar").value.toLowerCase();

    for (var i=0; i<array.length; i++) {
        if (!(foods[array[i]].food_name.toLowerCase().includes(input))) {
            array[i] = -1
        }
    }
    del_elem(array, -1)
}

function boxFilter(array, filter) {
    var input = document.getElementById(filter).checked;
    if (input) {
        for (var i=0; i<array.length; i++) {
            if (!(foods[array[i]].tags.includes(filter))) {
                array[i] = -1
            }
        }
        del_elem(array, -1)
    }
}

function showDropDown() {
    var dropdown = document.getElementById("filter_dropdown")
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}

function hideDropDown() {
    var dropdown = document.getElementById("filter_dropdown")
    dropdown.style.display = "none";
}

var filters = ["vegan", "vegetarian", "no-dairy", "pasta", "meat", "dessert"]

function buildFoodsList() {
    var foods_list = document.getElementById("foods_list");
    var User_prefs = getUserPrefs();

    food_ids = []
    for (var i=0; i<foods.length; i++) {
        food_ids.push(i)
    }
    // FILTERING DONE HERE!
    searchFilter(food_ids)
    for (var i=0; i<filters.length; i++) {
        boxFilter(food_ids, filters[i])
    }
    //boxFilter(food_ids)

    if (foods_list != null) {
        foods_list.innerHTML = "";
        for (var i=0; i<food_ids.length; i++) {
            var fav = 0;
            if (User_prefs.includes(food_ids[i])) {
                fav = 1
            }

            var availability = check_available(i)
            var list_item_div = document.createElement('div');
            list_item_div.classList.add('list_item');
            list_item_div.innerHTML = `
            <img src="img/heart_${fav}.png" onclick="call_toggle_fav(${food_ids[i]})" id="heart"></img>
            <img src="${foods[food_ids[i]].img_src}"></img>
            <div class="food_name">${foods[food_ids[i]].food_name}</div>
            <div class="availability">${availability}</div>
            `;

            foods_list.appendChild(list_item_div);
        }
    }
}

function call_toggle_fav(id) {
    toggle_fav(id);
    buildFoodsList();
}

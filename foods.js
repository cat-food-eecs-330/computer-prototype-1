var foods = [
    {
        food_name : "Burger",
        img_src : "img/burger.jpeg",
        tags: ["meat", "no-dairy"]
    },
    {
        food_name : "Pizza",
        img_src : "img/pizza.jpg",
        tags: ["meat", "pasta"]
    },
    {
        food_name : "Taco",
        img_src : "img/taco.jpg",
        tags: ["meat", "no-dairy"]
    },
    {
        food_name : "Cookies",
        img_src : "img/cookies.jpg",
        tags: ["dessert", "vegetarian"]
    },
    {
        food_name : "Beef",
        img_src : "img/beef.jpeg",
        tags: ["meat", "no-dairy"]
    },
    {
        food_name : "Salad",
        img_src : "img/salad.jpeg",
        tags: ["vegetarian", "vegan", "no-dairy"]
    },
    {
        food_name : "Spaghetti and Meatballs",
        img_src : "img/spaghetti.jpg",
        tags: ["meat", "pasta", "no-dairy"]
    },
    {
        food_name : "Tofu",
        img_src : "img/tofu.jpg",
        tags: ["vegetarian", "vegan", "no-dairy"]
    },
    {
        food_name : "Tortellini",
        img_src : "img/tortellini.jpg",
        tags: ["pasta", "vegetarian"]
    },

];

function getUserPrefs() {
    if (localStorage.user == "Adam") {
        return JSON.parse(localStorage.Adam_prefs)
    }
    if (localStorage.user == "Eve") {
        return JSON.parse(localStorage.Eve_prefs)
    }
}

function toggle_fav(id) {
    var prefs
    if (localStorage.user == "Adam") {
        prefs = JSON.parse(localStorage.Adam_prefs)
        if (prefs.includes(id)) {
            del_elem(prefs, id)
        }
        else {
            prefs.push(id)
        }
        localStorage.Adam_prefs = JSON.stringify(prefs)
    }
    if (localStorage.user == "Eve") {
        prefs = JSON.parse(localStorage.Eve_prefs)
        if (prefs.includes(id)) {
            del_elem(prefs, id)
        }
        else {
            prefs.push(id)
        }
        localStorage.Eve_prefs = JSON.stringify(prefs)
    }
}

function check_available(food_id) {
    var locales_with_food = []
    for (var i=0; i<locales.length; i++) {
        if (locales[i].menu["05/29/2019"].includes(food_id)) {
            locales_with_food.push(locales[i].locale_name)
        }
    }
    if (locales_with_food.length == 0) {
        return `Currently unavailable.`
    }

    var locales_with_food_str = locales_with_food.join(", ")
    console.log(locales_with_food_str)
    return `Available at: </b> ${locales_with_food_str}`
}




function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;

};

function del_elem(array, elem) {
    for(var i = array.length - 1; i >= 0; i--) {
        if(array[i] == elem) {
            array.splice(i, 1);
        }
    }
}

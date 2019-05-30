var foods = [
    {
        food_name : "Burger",
        img_src : "img/burger.png",
        tags: ["meat", "no-dairy"]
    },
    {
        food_name : "Pizza",
        img_src : "img/pizza.png",
        tags: ["meat", "pasta"]
    },
    {
        food_name : "Taco",
        img_src : "img/taco.png",
        tags: ["meat", "no-dairy"]
    },
    {
        food_name : "Cookies",
        img_src : "img/cookies.png",
        tags: ["dessert"]
    },
    {
        food_name : "Beef",
        img_src : "img/beef.png",
        tags: ["meat", "no-dairy"]
    },
    {
        food_name : "Salad",
        img_src : "img/salad.png",
        tags: ["vegetarian", "vegan", "no-dairy"]
    },
    {
        food_name : "Spaghetti and Meatballs",
        img_src : "img/spaghetti.png",
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

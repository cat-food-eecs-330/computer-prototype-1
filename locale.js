function buildMenuList(menu_foods) {
    var menu = document.getElementById("menu");
    var User_prefs = getUserPrefs();

    if (menu != null) {
        menu.innerHTML = "";
        for (var i=0; i<menu_foods.length; i++) {
            var fav = 0;
            if (User_prefs.includes(menu_foods[i])) {
                fav = 1
            }

            var list_item_div = document.createElement('div');
            list_item_div.classList.add('list_item');
            list_item_div.innerHTML = `
                <img src="img/heart_${fav}.png" onclick="call_toggle_fav(${menu_foods[i]}, ${JSON.stringify(menu_foods)})" id="heart"></img>
                <img src="${foods[menu_foods[i]].img_src}"></img>
                <div class="food_name">${foods[menu_foods[i]].food_name}</div>
            `;

            menu.appendChild(list_item_div);
        }
    }
}

function call_toggle_fav(id, menu_foods) {
    toggle_fav(id);
    buildMenuList(menu_foods);
}

function getMyDateValue(e) {
    // Get the date value from the srcElement of the event
    var dateArr = e.srcElement.value.split('-');
    // Make sure we are dealing with an array of at least length 2
    if (dateArr.length > 1) {
   	  // Format the date as needed
   	  // Currently mm/dd/yyyy
      var date = dateArr[1] + '/' + dateArr[2] + '/' + dateArr[0];

      if (date == "05/29/2019") {
          buildMenuList([0, 3, 4, 5, 8])
      }
      if (date == "05/30/2019") {
          buildMenuList([1, 2, 4, 5, 6])
      }
      if (date == "05/31/2019") {
          buildMenuList([1, 3, 6, 7, 8])
      }
    }
}
// Add an event listener to my date field

function init() {
    document.getElementById("calendar").addEventListener("blur", getMyDateValue)
}

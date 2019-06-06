function selectLocale(id) {
    localStorage.locale = id
}

function buildLocalePage(id) {
    var locale_name = document.getElementById("page-name");
    locale_name.innerHTML = locales[id].locale_name;
}

function buildHours(date, id) {
    var hours = document.getElementById("hours");
    hours.innerHTML = locales[id].hours[date]
}

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

function update_page() {
    var dateArr = document.getElementById("calendar").value.split('-');
    if (dateArr.length > 1) {
        var date = dateArr[1] + '/' + dateArr[2] + '/' + dateArr[0];
        var locale = parseInt(localStorage.locale)

        buildMenuList(locales[locale].menu[date])
        buildHours(date, locale)
    }
}

function init() {
    var locale = parseInt(localStorage.locale)
    buildLocalePage(locale)
    buildMenuList(locales[locale].menu["05/29/2019"])
    buildHours("05/29/2019", locale)
}

function makeAm() {
  document.getElementById('time-zone').innerHTML = 'AM';
}

function makePm() {
  document.getElementById('time-zone').innerHTML = 'PM';
}
function fillReminder() {
  x = document.getElementById('input-location').value
  y = document.getElementById('input-time').value
  z = document.getElementById('time-zone').innerHTML
  rem = document.getElementById('the-reminder')
  if (x != "" && y != "") {
    rem.innerHTML = "You will be reminded about " + x + " at " + y + " " + z
  }

}

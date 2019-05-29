function login() {
    var usrname = document.getElementById("user").value
    var pass = document.getElementById("pass").value

    if (usrname.toLowerCase() == "adam" && pass == "password1") {
        localStorage.user = "Adam";
        window.location.href = "hour.html";
    }
    if (usrname.toLowerCase() == "eve" && pass == "password2") {
        localStorage.user = "Eve";
        window.location.href = "hour.html";
    }
}

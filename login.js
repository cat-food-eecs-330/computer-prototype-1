function login() {
    var usrname = document.getElementById("user").value
    var pass = document.getElementById("pass").value

    if (usrname == "Adam" && pass == "password1") {
        localStorage.user = "Adam";
    }
    if (usrname == "Eve" && pass == "password2") {
        localStorage.user = "Eve";
    }
    window.location.href = "main_page.html";
}

function login() {
    var usrname = document.getElementById("user").value
    var pass = document.getElementById("pass").value

    if (usrname == "Adam" && pass == "password1") {
        window.location.href = "Page1.html";
    }
    if (usrname == "Eve" && pass == "password2") {
        window.location.href = "Page1_Eve.html";
    }
}

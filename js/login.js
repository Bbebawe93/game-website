// login form 
var loginForm = document.getElementById("login-form");

// target form input element by name
var loginUsername = loginForm["log-username"];
var loginPassword = loginForm["log-password"];
var loginMessage = document.querySelector("#log-username-error");

loginForm.onsubmit = function (e) {
    e.preventDefault();
    let username = loginUsername.value;
    let password = loginPassword.value;
    if (localStorage[username] != undefined) {
        var user = JSON.parse(localStorage[username]);
        if (user.password === password) {
            loginMessage.classList.remove("error");
            loginMessage.classList.add("success");
            loginMessage.innerHTML = "<i class='fas fa-check-circle'></i> logged in";
        } else {
            loginMessage.classList.remove("success");
            loginMessage.classList.add("error");
            loginMessage.innerHTML = "<i class='fas fa-times-circle'></i> invalid username or password";
        }
    } else {
        loginMessage.classList.remove("success");
        loginMessage.classList.add("error");
        loginMessage.innerHTML = "<i class='fas fa-times-circle'></i> invalid username or password";
    }
}
// login form element 
var loginForm = document.getElementById("login-form");

// target login form input element by name
var loginUsername = loginForm["log-username"];
var loginPassword = loginForm["log-password"];
var loginMessage = document.querySelector("#log-username-error");


loginUsername.onfocus = function () {
    loginMessage.classList.remove("success");
    loginMessage.classList.remove("error");
    loginMessage.innerHTML = "";
}

// onsubmit event calls login function 
loginForm.onsubmit = function (e) {
    e.preventDefault();
    var username = loginUsername.value;
    var password = loginPassword.value;
    // checks user found or no 
    if (UserLogin(username, password) == true) {
        loginMessage.classList.remove("error");
        loginMessage.classList.add("success");
        loginMessage.innerHTML = "<i class='fas fa-check-circle'></i> logged in";
    } else {
        loginMessage.classList.remove("success");
        loginMessage.classList.add("error");
        loginMessage.innerHTML = "<i class='fas fa-times-circle'></i> invalid username or password";
    }

}
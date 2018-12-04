// login form element 
var loginForm = document.getElementById("login-form");
var loginBlock = document.getElementById("login-block");

// target login form input element by name
var loginUsername = loginForm["log-username"];
var loginPassword = loginForm["log-password"];
var loginMessage = document.querySelector("#log-username-error");
var regMessage = document.getElementById("reg-message");


// boolean value to store current state of login user
var userLoggedIn = localStorage.getItem("userLoggedIn");


// var to hold logged user object
var loggedUser;


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
    if (UserLogin(username, password) === true) {
        loginMessage.classList.remove("error");
        loginMessage.classList.add("success");
        loginMessage.innerHTML = "<i class='fas fa-check-circle'></i> logged in";
        loggedUser = fetchUser(username);
        userLoggedIn = username;
        localStorage.setItem("userLoggedIn", userLoggedIn);
        window.location.reload();

    } else {
        userLoggedIn;
        localStorage.setItem("userLoggedIn", userLoggedIn);
        loginMessage.classList.remove("success");
        loginMessage.classList.add("error");
        loginMessage.innerHTML = "<i class='fas fa-times-circle'></i> invalid username or password";
    }

} // end loginForm onsubmit event function

if (localStorage.userLoggedIn != "none") {
    loggedUser = fetchUser(localStorage.userLoggedIn);
    var registrationFrom = document.getElementById("registration-form");
    var head = document.querySelector(".main-heading");
    var userProfile = document.querySelector(".user-profile");
    registrationFrom.className = "hide";
    loginBlock.className = "hide";
    userProfile.classList.add("success");
    head.innerHTML = "User Account";
    userProfile.innerHTML = "First Name: " + loggedUser.firstName +
        "<br>Last Name: " + loggedUser.lastName +
        "<br>Username: " + loggedUser.username +
        "<br>Score: " + loggedUser.score +
        "<br>Lives: " + loggedUser.lives;
    var logout = document.createElement("button");
    logout.id = "logout-btn";
    var logoutTextNode = document.createTextNode("Logout");
    var addLives = document.createElement("button");
    addLives.id = "add-lives";
    var addLiveTextNode = document.createTextNode("Add Lives");
    logout.appendChild(logoutTextNode);
    addLives.appendChild(addLiveTextNode)
    userProfile.after(logout);
    logout.after(addLives);


    logout.onclick = function () {
        localStorage.userLoggedIn = "none";
        window.location.reload();
    }

    addLives.onclick = function() {
        addUserLives(loggedUser.username);
     
    }
} else if (localStorage.userLoggedIn == "none") {
    var registrationFrom = document.getElementById("registration-form");
    var head = document.querySelector(".main-heading");
    var userProfile = document.querySelector(".user-profile");
    regBlock.classList.toggle("hide");
    loginBlock.className = "";
}
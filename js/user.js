// user object constructor
function User(firstName, lastName, username, password, score, lives) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.score = score;
    this.lives = lives;
}

// create users array 
var users = new Array();

// function to get registered users from local storage using JSON
// function return empty array if no users are registered
function getUsers() {
    return JSON.parse(localStorage.getItem("registeredUsers") || "[]");
}

// function to save users to local storages using JSON 
function addUsers(userFirstName, userLastName, userUsername, userPassword, score, lives) {
    users = getUsers();
    var newUser = new User(userFirstName, userLastName, userUsername, userPassword, score, lives);
    users.push(newUser);
    localStorage.setItem("registeredUsers", JSON.stringify(users));
}

// function to check if user is already registered, return boolean value
function registeredUser(username) {
    var registeredUser = false;
    users = getUsers();  // return users from local storage 
    for (i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            registeredUser = true;
            break;
        }
    }
    return registeredUser
}

// function to check if user username and password match local storage 
function UserLogin(username, password) {
    var userFound;
    var correctPassword;
    users = getUsers();
    for (i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            userFound = true;
            if (users[i].password === password) {
                correctPassword = true; 
            } else {
                correctPassword = false; 
            }
            break;
        } else {
            userFound = false;
        }
    }
    if(userFound && correctPassword) {
        return true; 
    } else {
        return false;
    }
}
// function return user if username and password matches 
function fetchUser(username) {
    var user; 
    var users = getUsers();
    for(i = 0; i < users.length; i++) {
        if(users[i].username === username) {
            user = users[i];
            break;
        }
    }
    return user;
}

function updateUserScore(username) {
    var users = getUsers(); 
    for(i = 0; i < users.length; i++) {
        if(users[i].username === username) {
            users[i].score +=1;
        }
    }
    localStorage.registeredUsers = JSON.stringify(users);

}

function updateUserLives(username) {
    var users = getUsers(); 
    for(i = 0; i < users.length; i++) {
        if(users[i].username === username) {
            users[i].lives -=1;
        }
    }
    localStorage.registeredUsers = JSON.stringify(users);
}

function addUserLives(username) {
    var users = getUsers(); 
    for(i = 0; i < users.length; i++) {
        if(users[i].username === username) {
            if(users[i].lives >= 6) {
                alert("Lives at Max");
            } else {
                users[i].lives +=1;
                alert("1 live added");

            }
        }
    }
    localStorage.registeredUsers = JSON.stringify(users);
    window.location.reload();
}

// set the local storage values when game runs for the first time or when the user clear the local storage
window.onload = function () {
    if (localStorage.getItem("userLoggedIn") == null) {
        localStorage.setItem("userLoggedIn", "none");
        window.location.reload(); // reload the page to read the new values 
    }
    if (JSON.parse(localStorage.getItem("registeredUsers")) == null) {
        localStorage.setItem("registeredUsers", JSON.stringify(users));
        window.location.reload(); // reload the page to read the new values 
    }
}


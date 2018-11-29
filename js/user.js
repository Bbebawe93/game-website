// user constructor 
function User(firstName, lastName, username, password, score, lives) {
    this.firstName = firstName; 
    this.lastName = lastName;
    this.username = username; 
    this.password = password;
    this.score = score; 
    this.lives = lives; 
}

var beshoy = new User();

var userStr = JSON.stringify(beshoy)
// array of users 
var users = [];

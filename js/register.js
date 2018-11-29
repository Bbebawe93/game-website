// registration form var 
var registrationFrom = document.getElementById("registration-form");

// target form input element by name 
var firstName = registrationFrom["first-name"];
var lastName = registrationFrom["last-name"];
var username = registrationFrom["username"];
var password = registrationFrom["reg-password"];

// input field messages 
var firstNameMessage = document.querySelector("#first-name-error");
var lastNameMessage = document.querySelector("#last-name-error");
var usernameMessage = document.querySelector("#username-error");
var passwordMessage = document.querySelector("#reg-password-error");
var regErrorMessage = document.querySelector("#reg-error");
// regular expressions 
var digitReg = /[0-9]/;
var stringReg = /^[a-zA-Z]+$/;
var usernameReg = /[a-zA-Z]/;
var spaceReg = /\s{1}/

// validation object used to represent valid form
var validForm = {
    validFirstName: false,
    validLastName: false,
    validUsername: false,
    validPassword: false
}

// user 
var userFirstName;
var userLastName;
var userUsername;
var userPassword;

// registration form validation functions
// firstName validation function  
firstName.onfocus = function () {
    firstNameMessage.classList.add("info");
    firstNameMessage.innerHTML = "<i class='fas fa-info-circle'></i> please enter your first name";
}
firstName.onblur = function () {
    let valid = true;
    var errorMessage = "<i class='fas fa-times-circle'></i> ";
    let firstNameValue = firstName.value;
    if (!stringReg.test(firstNameValue) || (digitReg.test(firstNameValue))) {
        errorMessage += "cannot contain digits, spaces, special characters, "
        valid = false;
    }
    if (firstNameValue.length <= 3) {
        errorMessage += "too short"
        valid = false
    }
    if (!valid) {
        firstNameMessage.classList.remove("info");
        firstNameMessage.classList.add("error");
        firstNameMessage.innerHTML = errorMessage;

    } else if (valid) {
        validForm.validFirstName = true;
        userFirstName = firstNameValue;
        firstNameMessage.classList.remove("info");
        firstNameMessage.classList.remove("error");
        firstNameMessage.classList.add("success");
        firstNameMessage.innerHTML = "<i class='fas fa-check-circle'></i>"
    }
}

// lastName validation function  
lastName.onfocus = function () {
    lastNameMessage.classList.add("info");
    lastNameMessage.innerHTML = "<i class='fas fa-info-circle'></i> please enter your last name";
}
lastName.onblur = function () {
    let valid = true;
    var errorMessage = "<i class='fas fa-times-circle'></i> ";
    let lastNameValue = lastName.value;
    if (!stringReg.test(lastNameValue) || (digitReg.test(lastNameValue))) {
        errorMessage += "cannot contain digits, spaces, special characters, "
        valid = false;
    }
    if (lastNameValue.length <= 3) {
        errorMessage += "too short"
        valid = false
    }
    if (!valid) {
        lastNameMessage.classList.remove("info");
        lastNameMessage.classList.add("error");
        lastNameMessage.innerHTML = errorMessage;

    } else if (valid) {
        validForm.validLastName = true;
        userLastName = lastNameValue;
        lastNameMessage.classList.remove("info");
        lastNameMessage.classList.remove("error");
        lastNameMessage.classList.add("success");
        lastNameMessage.innerHTML = "<i class='fas fa-check-circle'></i>"
    }
}

// username validation function  
username.onfocus = function () {
    usernameMessage.classList.add("info");
    usernameMessage.innerHTML = "<i class='fas fa-info-circle'></i> must be 5 characters or more, includes letters and digits only";
}
username.onblur = function () {
    let valid = true;
    var errorMessage = "<i class='fas fa-times-circle'></i> ";
    let usernameValue = username.value;
    if (!usernameReg.test(usernameValue) || !(digitReg.test(usernameValue)) || (spaceReg.test(usernameValue))) {
        errorMessage += "invalid username, "
        valid = false;
    }
    if (usernameValue.length <= 5) {
        errorMessage += "too short"
        valid = false
    }
    if (!valid) {
        usernameMessage.classList.remove("info");
        usernameMessage.classList.add("error");
        usernameMessage.innerHTML = errorMessage;

    } else if (valid) {
        validForm.validUsername = true;
        userUsername = usernameValue;
        usernameMessage.classList.remove("info");
        usernameMessage.classList.remove("error");
        usernameMessage.classList.add("success");
        usernameMessage.innerHTML = "<i class='fas fa-check-circle'></i>"
    }
}

// password validation function  
password.onfocus = function () {
    passwordMessage.classList.add("info");
    passwordMessage.innerHTML = "<i class='fas fa-info-circle'></i> must be 5 characters or more, includes letters and digits only";
}
password.onblur = function () {
    let valid = true;
    var errorMessage = "<i class='fas fa-times-circle'></i> ";
    let passwordValue = password.value;
    if (!usernameReg.test(passwordValue) || !(digitReg.test(passwordValue)) || (spaceReg.test(passwordValue))) {
        errorMessage += "invalid password, "
        valid = false;
    }
    if (passwordValue.length < 5) {
        errorMessage += "too short"
        valid = false
    }
    if (!valid) {
        passwordMessage.classList.remove("info");
        passwordMessage.classList.add("error");
        passwordMessage.innerHTML = errorMessage;

    } else if (valid) {
        validForm.validPassword = true
        userPassword = passwordValue;
        passwordMessage.classList.remove("info");
        passwordMessage.classList.remove("error");
        passwordMessage.classList.add("success");
        passwordMessage.innerHTML = "<i class='fas fa-check-circle'></i>"
    }
}

registrationFrom.onsubmit = function () {
    var submit = true
    for (key in validForm) {
        if (validForm[key] == false) {
            submit = false;
        }
    }
    if (!submit) {
        regErrorMessage.classList.add("error");
        regErrorMessage.innerHTML = "<i class='fas fa-info-circle'></i> please fill up the form correctly";
    } else if (submit) {
        regErrorMessage.classList.remove("error");
        regErrorMessage.classList.add("success");
        regErrorMessage.innerHTML = "<i class='fas fa-check-circle'></i> user registered successfully"
        beshoy.firstName = userFirstName;
        beshoy.lastName = userLastName;
        beshoy.username = userUsername;
        beshoy.password = userPassword;
        var userStr = JSON.stringify(beshoy);
        localStorage.beshoyUser = userStr;
        console.log(userStr);
    }
    
    return submit
}
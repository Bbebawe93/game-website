// registration form var
var registrationFrom = document.getElementById("registration-form");
var regBlock = document.getElementById("reg-block");
var regMessage = document.getElementById("reg-message");
var clearBtn = document.getElementById("clear-button");

// target form input elements by name
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
var spaceReg = /\s{1}/;

// validation object used to represent valid form
var validForm = {
  validFirstName: false,
  validLastName: false,
  validUsername: false,
  validPassword: false
};

// temporary user variables 
var userFirstName;
var userLastName;
var userUsername;
var userPassword;


// registration form validation functions

// firstName validation function
firstName.onfocus = function () {
  firstNameMessage.className = "info";
  firstNameMessage.innerHTML =
    "<i class='fas fa-info-circle'></i> please enter your first name";
}; // end firstName onfocus event function 

firstName.onblur = function () {
  let valid = true;
  var errorMessage = "<i class='fas fa-times-circle'></i> ";
  let firstNameValue = firstName.value;
  if (!stringReg.test(firstNameValue) || digitReg.test(firstNameValue)) {
    errorMessage += "cannot contain digits, spaces, special characters, ";
    valid = false;
  }
  if (firstNameValue.length <= 3) {
    errorMessage += "too short";
    valid = false;
  }
  if (!valid) {
    firstNameMessage.className = "error";
    firstNameMessage.innerHTML = errorMessage;
  } else if (valid) {
    validForm.validFirstName = true;
    userFirstName = firstNameValue;
    firstNameMessage.className = "success";
    firstNameMessage.innerHTML = "<i class='fas fa-check-circle'></i>";
  }
}; // end firstName onblur event function 

// lastName validation function
lastName.onfocus = function () {
  lastNameMessage.className = "info";
  lastNameMessage.innerHTML = "<i class='fas fa-info-circle'></i> please enter your last name";
}; // end lastName onfocus event function 

lastName.onblur = function () {
  let valid = true;
  var errorMessage = "<i class='fas fa-times-circle'></i> ";
  let lastNameValue = lastName.value;
  if (!stringReg.test(lastNameValue) || digitReg.test(lastNameValue)) {
    errorMessage += "cannot contain digits, spaces, special characters, ";
    valid = false;
  }
  if (lastNameValue.length <= 3) {
    errorMessage += "too short";
    valid = false;
  }
  if (!valid) {
    lastNameMessage.className = "error";
    lastNameMessage.innerHTML = errorMessage;
  } else if (valid) {
    validForm.validLastName = true;
    userLastName = lastNameValue;
    lastNameMessage.className = "success";
    lastNameMessage.innerHTML = "<i class='fas fa-check-circle'></i>";
  }
}; // end lastName onblur event function 

// username validation function
username.onfocus = function () {
  usernameMessage.className = "info";
  usernameMessage.innerHTML =
    "<i class='fas fa-info-circle'></i> must be 5 characters or more, includes letters and digits only";
}; // end username onfocus event function 

username.onblur = function () {
  let valid = true;
  var errorMessage = "<i class='fas fa-times-circle'></i> ";
  let usernameValue = username.value;
  if (
    !usernameReg.test(usernameValue) ||
    !digitReg.test(usernameValue) ||
    spaceReg.test(usernameValue)
  ) {
    errorMessage += "invalid username, ";
    valid = false;
  }
  if (usernameValue.length <= 5) {
    errorMessage += "too short";
    valid = false;
  }
  if (registeredUser(usernameValue)) {
    errorMessage += "username exists";
    valid = false;
  }
  if (!valid) {
    usernameMessage.className = "error";
    usernameMessage.innerHTML = errorMessage;
  } else if (valid) {
    validForm.validUsername = true;
    userUsername = usernameValue;
    usernameMessage.className = "success";
    usernameMessage.innerHTML = "<i class='fas fa-check-circle'></i>";
  }
}; // end username onblur event function 

// password validation function
password.onfocus = function () {
  passwordMessage.className = "info";
  passwordMessage.innerHTML =
    "<i class='fas fa-info-circle'></i> must be 5 characters or more, includes letters and digits only";
}; // end password onfocus event function 

password.onblur = function () {
  let valid = true;
  var errorMessage = "<i class='fas fa-times-circle'></i> ";
  let passwordValue = password.value;
  if (
    !usernameReg.test(passwordValue) ||
    !digitReg.test(passwordValue) ||
    spaceReg.test(passwordValue)
  ) {
    errorMessage += "invalid password, ";
    valid = false;
  }
  if (passwordValue.length < 5) {
    errorMessage += "too short";
    valid = false;
  }
  if (!valid) {
    passwordMessage.className = "error";
    passwordMessage.innerHTML = errorMessage;
  } else if (valid) {
    validForm.validPassword = true;
    userPassword = passwordValue;
    passwordMessage.className = "success";
    passwordMessage.innerHTML = "<i class='fas fa-check-circle'></i>";
  }
}; // end password onblur event function 

// function to clear the form after submission 
function clearForm() {
  registrationFrom.reset();
  firstNameMessage.className = "";
  lastNameMessage.className = "";
  usernameMessage.className = "";
  passwordMessage.className = "";
  regErrorMessage.className = "";
  firstNameMessage.innerHTML = "";
  lastNameMessage.innerHTML = "";
  usernameMessage.innerHTML = "";
  passwordMessage.innerHTML = "";
  regErrorMessage.innerHTML = "";
} // end function clearFrom 

registrationFrom.onsubmit = function (e) {
  e.preventDefault();
  var submit = true;
  for (key in validForm) {
    if (validForm[key] == false) {
      submit = false;
    }
  }
  if (!submit) {
    regErrorMessage.className = "error";
    regErrorMessage.innerHTML = "<i class='fas fa-times-circle'></i> please fill up the incorrect fields";
  } else if (submit) {
    regErrorMessage.className = "success";
    addUsers(userFirstName, userLastName, userUsername, userPassword, 0, 3);
    localStorage.setItem("userLoggedIn", "none")
    clearForm();
    regBlock.classList.toggle("hide");
    regMessage.classList.toggle("hide");
    regMessage.innerHTML = "<i class='fas fa-check-circle'></i> Thank you " + userFirstName + " " + userLastName + ", user registered successfully <br> you can now login to your account";

  }
}; // end registrationForm onsubmit event function

// function clears the form when clear button is clicked 
clearBtn.onclick = function () {
  window.location.reload();
} // end clearBtn onclick event function
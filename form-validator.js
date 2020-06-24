let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");
let button = document.querySelector("button");

function validateUsername() {
  // Username must be 16 or less characters
  if (username.value.length <= 16 && username.value.length > 2) {
    // Add success class to parent
    username.parentNode.classList.add("success");
    username.parentNode.classList.remove("error");
  } else if (username.value.length > 16) {
    username.parentNode.classList.add("error");
    document.getElementById("username_message").innerHTML =
      "Username must be less than 16 characters";
  } else {
    username.parentNode.classList.add("error");
    document.getElementById("username_message").innerHTML =
      "Username must be at least 3 characters";
  }

  return true;
}

function validateEmail() {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(email.value).toLowerCase())) {
    email.parentNode.classList.add("success");
    email.parentNode.classList.remove("error");
  } else {
    document.getElementById("email_message").innerHTML = "Email not valid";
    email.parentNode.classList.add("error");
    email.parentNode.classList.remove("success");
  }
}

function validatePassword() {
  if (password.value.length >= 6) {
    if (password.value == password.value.toLowerCase()) {
      document.getElementById("password_message").innerHTML =
        "Password must include a large character";
      password.parentNode.classList.add("error");
      password.parentNode.classList.remove("success");
    } else if (password.value == password.value.toUpperCase()) {
      document.getElementById("password_message").innerHTML = "test";
      password.parentNode.classList.add("error");
      password.parentNode.classList.remove("success");
    } else {
      password.parentNode.classList.remove("error");
      password.parentNode.classList.add("success");
    }
  } else {
    document.getElementById("password_message").innerHTML =
      "Password must be at least 6 characters";
    password.parentNode.classList.add("error");
    password.parentNode.classList.remove("success");
  }
}

function validatePassword2() {
  if (password2.value.length > 0) {
    if (password2.value === password.value) {
      password2.parentNode.classList.remove("error");
      password2.parentNode.classList.add("success");
    } else {
      password2.parentNode.classList.add("error");
      password2.parentNode.classList.remove("success");
      document.getElementById("password2_message").innerHTML =
        "Passwords do not match";
    }
  } else {
    password2.parentNode.classList.add("error");
    password2.parentNode.classList.remove("success");
    document.getElementById("password2_message").innerHTML =
      "Password is required";
  }
}

button.addEventListener("click", function () {
  validateUsername();
  validateEmail();
  validatePassword();
  validatePassword2();
});

document.addEventListener("keypress", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    button.click();
  }
});

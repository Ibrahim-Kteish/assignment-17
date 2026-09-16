const username = document.getElementById("username");
const password = document.getElementById("password");
const loginButton = document.getElementById("login");
const message = document.getElementById("message");

function checkCredentials(usernameText, passwordText) {
    if (usernameText.length < 6) {
        throw new Error("Username text must be at least 6 characters");
    }

    if (passwordText.length < 10) {
        throw new Error("Password text must be at least 10 characters");
    }
}

function login() {
    try {
        checkCredentials(username.value, password.value);

        message.textContent = "Authenticated";
        message.style.color = "green";

        username.value = "";
        password.value = "";
    } catch (error) {
        message.textContent = error.message;
        message.style.color = "red";
    } finally {
        console.log("Login mission completed");
    }
}

loginButton.addEventListener("click", login);

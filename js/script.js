document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMessage = document.getElementById("errorMessage");

    if (username === "" || password === "") {

        errorMessage.textContent = "Please enter username and password.";

    } else {

        window.location.href = "home.html";

    }

});

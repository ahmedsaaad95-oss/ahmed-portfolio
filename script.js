document.addEventListener("DOMContentLoaded", function() {
    const loginModal = document.getElementById("loginModal");
    const loginForm = document.getElementById("loginForm");
    const closeBtn = document.querySelector(".close");
    const greetingElement = document.getElementById("greeting");

    // Show the login modal on page load
    loginModal.style.display = "block";

    // Close the modal when the close button is clicked
    closeBtn.onclick = function() {
        loginModal.style.display = "none";
    };

    // Close the modal when clicking outside the modal content
    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
    };

    // Handle login form submission
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const correctUsername = "ahmed";
        const correctPassword = "password123"; // Set your desired password here

        if (username === correctUsername && password === correctPassword) {
            loginModal.style.display = "none";
            displayGreeting();
        } else {
            alert("Incorrect username or password.");
        }
    });

    function displayGreeting() {
        const now = new Date();
        const hours = now.getHours();
        let greetingText = "";

        if (hours < 12) {
            greetingText = "Good Morning";
        } else if (hours < 18) {
            greetingText = "Good Afternoon";
        } else {
            greetingText = "Good Evening";
        }

        greetingElement.textContent = greetingText;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.login-btn');
    const usernameInput = document.querySelector('input[placeholder="Username"]');
    const passwordInput = document.querySelector('input[placeholder="Password"]');

    loginButton.addEventListener('click', (e) => {
        e.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === '' || password === '') {
            console.log("Login failed: Please fill in all fields.");
            alert("Please enter both username and password.");
        } else {
            console.log("Login successful with:");
            console.log("Username:", username);
            console.log("Password:", password);
            alert("Login submitted successfully.");
        }
    });
});
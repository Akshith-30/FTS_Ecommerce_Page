document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.login-btn');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const emailError = document.querySelector('#email-error');
    const passwordError = document.querySelector('#password-error');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    loginButton.addEventListener('click', (e) => {
        e.preventDefault();

        emailError.textContent = '';
        passwordError.textContent = '';

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        let isValid = true;

        if (email === '') {
            emailError.textContent = 'Please enter your email.';
            isValid = false;
        } else if (!emailRegex.test(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        if (password === '') {
            passwordError.textContent = 'Please enter your password.';
            isValid = false;
        }

        if (isValid) {
            console.log("Login successful with:");
            console.log("Email:", email);
            console.log("Password:", password);
            alert("Login submitted successfully.");
        }
    });
});

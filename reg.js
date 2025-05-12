document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".reg-form");
  const registerBtn = document.querySelector(".reg-btn");

  registerBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const nameInput = form.querySelector("input[placeholder='Full Name']");
    const emailInput = form.querySelector("input[placeholder='Email']");
    const passwordInput = form.querySelector("input[placeholder='Password']");

    const nameError = nameInput.nextElementSibling;
    const emailError = emailInput.nextElementSibling;
    const passwordError = passwordInput.nextElementSibling;

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    let hasError = false;

    // Email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nameInput.value.trim() === "") {
      nameError.textContent = "Full Name is required.";
      hasError = true;
    }

    if (emailInput.value.trim() === "") {
      emailError.textContent = "Email is required.";
      hasError = true;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      emailError.textContent = "Enter a valid email address.";
      hasError = true;
    }

    if (passwordInput.value.trim() === "") {
      passwordError.textContent = "Password is required.";
      hasError = true;
    }

    if (hasError) return;

    // Collect other fields
    const address = form.querySelector("input[placeholder='Address']").value.trim();
    const dob = form.querySelector("input[type='date']").value;
    const gender = form.querySelector("input[name='gender']:checked");
    const state = form.querySelector("select[name='state']").value;

    if (!address || !dob || !gender || !state) {
      alert("Please fill in all the required fields.");
      return;
    }

    console.log("Form submitted successfully:", {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      password: passwordInput.value.trim(),
      address,
      dob,
      gender: gender.value,
      state
    });

    alert("Registration successful!");
    form.reset();
  });
});

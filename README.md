#  E-Commerce UI – Simple Login and Registration Flow

## 📌 Project Overview

This project provides a **basic user interface (UI)** for an e-commerce website. It includes three main pages:

- **Home Page**
- **Login Page**
- **Registration Page**

These pages are built using **HTML, CSS, and JavaScript** and include **client-side validation** for a smooth user experience.

---

##  Project Structure
```
/e-commerce-ui
├── index.html # Home Page
├── login.html # Login Page
├── register.html # Registration Page
├── styles.css # CSS Styles (if separated)
└── script.js # JavaScript for form validation
```
---

##  Home Page (`index.html`)

**Purpose:** Welcomes users to the website.

**Features:**
- Welcome message.
- Two buttons:
  - **Login** – Redirects to the Login Page.
  - **Register** – Redirects to the Registration Page.

---

##  Login Page (`login.html`)

**Purpose:** Allows existing users to log in.

**Input Fields:**
- Email/Username
- Password

**Validation:**
- Ensures fields are not empty.
- Validates email format (if email is used).
- Shows alert on successful login or error.

---

##  Registration Page (`register.html`)

**Purpose:** Allows new users to register.

**Input Fields:**
- Full Name
- Email
- Password
- Address
- Phone Number
- Date of Birth (DOB)
- Gender (Radio Buttons)
- State (Dropdown)

**Validation:**
- All fields must be completed.
- Email must be valid.
- Password must:
  - Be at least 8 characters long.
  - Include one uppercase letter.
  - Include one number.
  - Include one special character (e.g., `@`, `#`, `$`).
- Real-time feedback is provided.
- Alerts on success or shows inline error messages.

---

##  Technologies Used

- **HTML5** – Structure and content
- **CSS3** – Styling and responsive design
- **JavaScript** – Interactivity and form validation

---

##  Validation Features

### 🔑 Login Page
- Checks for empty fields
- Validates email format

###  Registration Page
- All fields are required
- Valid email address
- Password complexity rules:
  - Minimum 8 characters
  - At least 1 uppercase letter
  - At least 1 number
  - At least 1 special character
- Real-time error feedback

---

## 🚀 How to Run the Project

1. **Clone or Download the Repository:**

```bash
git clone <repository-url>

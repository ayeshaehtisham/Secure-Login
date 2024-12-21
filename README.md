**SECURE LOGIN FORM**

**Overview:**
This project is a secure, responsive, and user-friendly login form built with HTML, CSS, and JavaScript. It demonstrates modern web development practices, including form validation, password hashing (SHA-256), and CSRF token generation.

The project uses client-side scripting to simulate secure login behavior and submits form data to a test API endpoint (https://httpbin.org/post).

**Features:**
- Secure Password Handling: Uses SHA-256 hashing for passwords before submission.
- CSRF Token Protection: Simulates CSRF protection with dynamically generated tokens.
- Client-Side Validation: Ensures email and password fields are filled before submission.
- Responsive Design: Fully responsive and works seamlessly on all devices.
- User-Friendly Messages: Displays success and error messages inline.
  
**Technologies Used:**
- HTML5: For the structure and layout.
- CSS3: For responsive and clean styling.
- JavaScript: For interactivity, hashing, and form submission.

**Usage Instructions:**
- Enter your email and password in the form fields.
- Click the Login button.
- The form data is validated, and hashed data (for the password) is submitted to https://httpbin.org/post.
- Success or error messages are displayed based on the result.

**Screenshot:**
![Project Screenshot](images/Project%20Screenshot.jpeg)

**Acknowledgements:**
- This project uses https://httpbin.org/post for testing API requests.
- Inspired by secure and user-friendly web form design principles.

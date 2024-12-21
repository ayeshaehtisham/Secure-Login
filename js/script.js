// Generate a CSRF token dynamically for enhanced security
document.addEventListener('DOMContentLoaded', () => {
  const csrfToken = generateCsrfToken();
  document.getElementById('csrf-token').value = csrfToken;
});

// Simple CSRF token generator (in real applications, fetch from server-side)
function generateCsrfToken() {
  return 'csrf_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// Form submission handling
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
  

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const csrfToken = document.getElementById('csrf-token').value;

  // Simple client-side validation
  if (!email || !password) {
    alert('Please fill in all fields.');
    return;
  }

  // Hash the password before submission for added security (SHA-256)
  const hashedPassword = sha256(password);

  // Prepare data for submission
  const formData = {
    email: email,
    password: hashedPassword,
    csrfToken: csrfToken,
  };

   // Display success or error messages
   message.textContent = "Processing...";
   message.style.color = "blue";

   // Submit data via fetch API
  fetch(loginForm.action, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      message.textContent = "Login successful! (simulated)";
      message.style.color = "green";
    })
    .catch(() => {
      message.textContent = "An error occurred. Please try again.";
      message.style.color = "red";
    });
});

// SHA-256 hashing function
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

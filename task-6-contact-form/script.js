document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Stop the default form submission

  // Clear previous messages
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';
  document.getElementById('successMsg').textContent = '';

  // Get input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  let isValid = true;

  // Validate name
  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required';
    isValid = false;
  }

  // Validate email with regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (email === '') {
  document.getElementById('emailError').textContent = 'Email is required';
  isValid = false;
} else if (!emailRegex.test(email)) {
  document.getElementById('emailError').textContent = 'Invalid email format';
  isValid = false;
}


  // Validate message
  if (message === '') {
    document.getElementById('messageError').textContent = 'Message is required';
    isValid = false;
  }

  // If all fields are valid
  if (isValid) {
    alert('✅ Your message has been sent!');
    window.location.href = 'thankyou.html'; // Redirect to a thank you page
  }
});

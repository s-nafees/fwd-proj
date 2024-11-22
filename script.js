// script.js

// Function to handle form validation on the sign-up page
document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signup-form');
  
  if (signupForm) {
    signupForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm-password').value;

      let errors = [];

      // Validate fields
      if (!username || username.length < 3) {
        errors.push('Username must be at least 3 characters.');
      }
      
      if (!email || !validateEmail(email)) {
        errors.push('Please enter a valid email.');
      }

      if (!password || password.length < 6) {
        errors.push('Password must be at least 6 characters.');
      }

      if (password !== confirmPassword) {
        errors.push('Passwords do not match.');
      }

      // Display errors or submit form
      const errorMessages = document.querySelector('.error-messages');
      if (errorMessages) errorMessages.remove();

      if (errors.length > 0) {
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('error-messages');
        errors.forEach((error) => {
          const errorParagraph = document.createElement('p');
          errorParagraph.textContent = error;
          errorDiv.appendChild(errorParagraph);
        });
        signupForm.insertBefore(errorDiv, signupForm.firstChild);
      } else {
        signupForm.submit();
      }
    });
  }

  // Function to validate email format
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  // Button functionality on main.html
  const signUpButton = document.querySelector('.btn-sign-up');
  const signInButton = document.querySelector('.btn-sign-in');

  if (signInButton) {
    signInButton.addEventListener('click', () => {
      window.location.href = 'sign-in.html';
    });
  }

  if (signUpButton) {
    signUpButton.addEventListener('click', () => {
      window.location.href = 'signup.html';
    });
  }
});

// script.js

// Function to handle form validation on the sign-in page
document.addEventListener('DOMContentLoaded', () => {
  const signinForm = document.getElementById('signin-form');
  
  if (signinForm) {
    signinForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;

      let errors = [];

      // Validate fields
      if (!email || !validateEmail(email)) {
        errors.push('Please enter a valid email.');
      }

      if (!password || password.length < 6) {
        errors.push('Password must be at least 6 characters.');
      }

      // Display errors or submit form
      const errorMessages = document.querySelector('.error-messages');
      if (errorMessages) errorMessages.remove();

      if (errors.length > 0) {
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('error-messages');
        errors.forEach((error) => {
          const errorParagraph = document.createElement('p');
          errorParagraph.textContent = error;
          errorDiv.appendChild(errorParagraph);
        });
        signinForm.insertBefore(errorDiv, signinForm.firstChild);
      } else {
        // Simulate form submission (e.g., checking credentials via an API)
        alert('Sign-in successful!');
        signinForm.submit();
      }
    });
  }

  // Function to validate email format
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
});

document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const form = document.querySelector('form');
    const loginButton = document.querySelector('.btn-login');
  
    // Show/Hide Password Toggle
    togglePassword.addEventListener('click', () => {
      const isHidden = passwordInput.type === 'password';
      passwordInput.type = isHidden ? 'text' : 'password';
      togglePassword.classList.toggle('fa-eye');
      togglePassword.classList.toggle('fa-eye-slash');
    });
  
    // Form Validation
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // stop for now
      let hasError = false;
      emailError.textContent = '';
      passwordError.textContent = '';
  
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      const isPasswordStrong = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  
      if (!isEmailValid) {
        emailError.textContent = 'Please enter a valid email.';
        hasError = true;
      }
  
      if (!isPasswordStrong) {
        passwordError.textContent = 'Password must be at least 8 characters and include a number.';
        hasError = true;
      }
  
      if (hasError) return;
  
      // If no errors:
      loginButton.disabled = true;
      loginButton.innerHTML = `
        <span class="spinner"></span> Signing in...
      `;
      form.submit(); // Submit only after feedback
    });
  });
  
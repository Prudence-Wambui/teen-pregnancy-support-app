document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const role = document.getElementById('role');
    const termsCheckbox = document.getElementById('terms');
    const languageSelect = document.getElementById('language');
    const profileInput = document.getElementById('profilePicture');
    const profilePreview = document.getElementById('profilePreview');
    const submitBtn = document.querySelector('.btn-register');
  
    const togglePassword = document.getElementById('togglePassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
  
    // === Show/Hide password toggle
    const setupToggle = (input, icon) => {
      icon.addEventListener('click', () => {
        const isHidden = input.type === 'password';
        input.type = isHidden ? 'text' : 'password';
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
      });
    };
  
    setupToggle(password, togglePassword);
    setupToggle(confirmPassword, toggleConfirmPassword);
  
    // === Live profile picture preview
    profileInput.addEventListener('change', () => {
      const file = profileInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          profilePreview.src = reader.result;
        };
        reader.readAsDataURL(file);
      }
    });
  
    // === Error display helpers
    const setError = (input, message) => {
      const formGroup = input.closest('.form-group');
      const error = formGroup.querySelector('.error-msg');
      error.textContent = message;
      input.classList.add('input-error');
    };
  
    const clearError = (input) => {
      const formGroup = input.closest('.form-group');
      const error = formGroup.querySelector('.error-msg');
      error.textContent = '';
      input.classList.remove('input-error');
    };
  
    const validateEmail = (emailValue) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
  
    // === Submission handler
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
  
      const emailValue = email.value.trim();
      const passwordValue = password.value.trim();
      const confirmPasswordValue = confirmPassword.value.trim();
      const roleValue = role.value;
      const languageValue = languageSelect.value;
  
      clearError(email);
      clearError(password);
      clearError(confirmPassword);
      clearError(role);
      clearError(termsCheckbox);
  
      if (!validateEmail(emailValue)) {
        setError(email, 'Please enter a valid email.');
        valid = false;
      }
  
      if (passwordValue.length < 6) {
        setError(password, 'Password must be at least 6 characters.');
        valid = false;
      }
  
      if (passwordValue !== confirmPasswordValue) {
        setError(confirmPassword, 'Passwords do not match.');
        valid = false;
      }
  
      if (!roleValue) {
        setError(role, 'Please select your role.');
        valid = false;
      }
  
      if (!termsCheckbox.checked) {
        setError(termsCheckbox, 'You must accept the terms to continue.');
        valid = false;
      }
  
      if (!valid) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Sign Up';
        return;
      }
  
      // Simulated email verification & redirection
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="spinner"></span> Verifying email...`;
  
      setTimeout(() => {
        alert('Verification link sent to ' + emailValue);
        submitBtn.innerHTML = `<span class="spinner"></span> Registering...`;
  
        setTimeout(() => {
          switch (roleValue) {
            case 'teen':
              window.location.href = '../../modules/pregnancy/pages/due_date_entry.html';
              break;
            case 'guardian':
              window.location.href = '../../modules/dashboard/pages/guardian_dashboard.html';
              break;
            case 'admin':
              window.location.href = '../../modules/dashboard/pages/admin.html';
              break;
            default:
              window.location.href = '/';
          }
        }, 1500);
      }, 1000);
    });
  
    // Clear error on input
    [email, password, confirmPassword, role, termsCheckbox].forEach((input) => {
      input.addEventListener('input', () => clearError(input));
      input.addEventListener('change', () => clearError(input));
    });
  });
  
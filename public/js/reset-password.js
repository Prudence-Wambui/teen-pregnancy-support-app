document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resetForm');
    const newPassword = document.getElementById('newPassword');
    const confirmPassword = document.getElementById('confirmPassword');
    const toggleIcons = document.querySelectorAll('.toggle-password');
    const resetButton = document.querySelector('.btn-reset');
  
    const showError = (input, message) => {
      const errorEl = input.closest('.form-group').querySelector('.error-msg');
      errorEl.textContent = message;
      input.classList.add('input-error');
    };
  
    const clearError = (input) => {
      const errorEl = input.closest('.form-group').querySelector('.error-msg');
      errorEl.textContent = '';
      input.classList.remove('input-error');
    };
  
    // === Toggle Eye Icons ===
    toggleIcons.forEach(icon => {
      icon.addEventListener('click', () => {
        const input = icon.previousElementSibling;
        const isHidden = input.type === 'password';
        input.type = isHidden ? 'text' : 'password';
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
      });
    });
  
    // === Validation + Submit ===
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
  
      const passwordValue = newPassword.value.trim();
      const confirmValue = confirmPassword.value.trim();
  
      clearError(newPassword);
      clearError(confirmPassword);
  
      if (passwordValue.length < 6) {
        showError(newPassword, 'Password must be at least 6 characters.');
        valid = false;
      }
  
      if (passwordValue !== confirmValue) {
        showError(confirmPassword, 'Passwords do not match.');
        valid = false;
      }
  
      if (!valid) return;
  
      // Spinner + Lock Button
      resetButton.disabled = true;
      resetButton.innerHTML = `<span class="spinner"></span> Resetting...`;
  
      // Simulate server call
      setTimeout(() => {
        window.location.href = "/reset-success.html";
      }, 1500);
    });
  
    // Keyboard accessibility: clear error on input
    [newPassword, confirmPassword].forEach(input =>
      input.addEventListener('input', () => clearError(input))
    );
  });
  
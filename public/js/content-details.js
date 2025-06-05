// content-details.js

document.addEventListener("DOMContentLoaded", function () {
    // 1. Reading Progress Bar
    const progressBar = document.createElement('div');
    progressBar.id = 'readingProgress';
    Object.assign(progressBar.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '0%',
      height: '5px',
      backgroundColor: '#CE6D56',
      zIndex: '9999',
      transition: 'width 0.25s ease'
    });
    document.body.prepend(progressBar);
  
    window.addEventListener('scroll', function () {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      progressBar.style.width = `${progress}%`;
    });
  
    // 2. Print Button
    const printBtn = document.createElement('button');
    printBtn.textContent = '🖨️ Print This Page';
    printBtn.className = 'print-button';
    Object.assign(printBtn.style, {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: '#CE6D56',
      color: '#fff',
      padding: '0.7rem 1rem',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
      zIndex: '9999'
    });
    document.body.appendChild(printBtn);
  
    printBtn.addEventListener('click', () => {
      window.print();
    });
  
    // 3. Dark Mode Toggle
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = '🌙 Toggle Dark Mode';
    darkModeToggle.className = 'dark-mode-toggle';
    Object.assign(darkModeToggle.style, {
      position: 'fixed',
      bottom: '70px',
      right: '20px',
      backgroundColor: '#333',
      color: '#fff',
      padding: '0.7rem 1rem',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
      zIndex: '9999'
    });
    document.body.appendChild(darkModeToggle);
  
    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  
    // 4. FAQ Section (collapsible support if needed)
    const faqs = document.querySelectorAll('.faq-question');
    faqs.forEach(faq => {
      faq.addEventListener('click', () => {
        faq.classList.toggle('active');
        const answer = faq.nextElementSibling;
        if (answer.style.maxHeight) {
          answer.style.maxHeight = null;
        } else {
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });
  
    // 5. Smooth Scroll to Top (optional enhancement)
    const scrollToTop = document.createElement('button');
    scrollToTop.innerHTML = '⬆️';
    scrollToTop.title = "Back to top";
    Object.assign(scrollToTop.style, {
      position: 'fixed',
      bottom: '120px',
      right: '20px',
      fontSize: '1.2rem',
      backgroundColor: '#666',
      color: '#fff',
      border: 'none',
      borderRadius: '50%',
      padding: '0.5rem 0.8rem',
      cursor: 'pointer',
      display: 'none',
      zIndex: '9999'
    });
    document.body.appendChild(scrollToTop);
  
    scrollToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    window.addEventListener('scroll', () => {
      scrollToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
  });
  
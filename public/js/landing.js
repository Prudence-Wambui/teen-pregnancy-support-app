document.addEventListener('DOMContentLoaded', () => {
    // === CAROUSEL FUNCTIONALITY ===
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    let current = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
      });
      slides[index].classList.add('active');
      dots[index].classList.add('active');
      current = index;
    }
  
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        showSlide(parseInt(dot.dataset.index));
      });
    });
  
    setInterval(() => {
      const next = (current + 1) % slides.length;
      showSlide(next);
    }, 8000);
  
    // === SMOOTH SCROLL NAVIGATION ===
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // === CTA BUTTON LOGIC (optional custom behavior)
    const ctaButtons = document.querySelectorAll('.cta-btn');
    ctaButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Replace this with real redirect or logic
        // window.location.href = "/register.html"; 
      });
    });
  });
  
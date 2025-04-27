 // public/js/landing.js

// Smooth scroll when user clicks "Get Started" or "Login"
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Animate Hero Section Text on Load
window.addEventListener('load', () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = 0;
        heroSection.style.transform = "translateY(50px)";
        setTimeout(() => {
            heroSection.style.transition = "all 1s ease";
            heroSection.style.opacity = 1;
            heroSection.style.transform = "translateY(0)";
        }, 200);
    }
});

// Update Footer Year Automatically
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('.footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = `© ${currentYear} Teen Pregnancy Support App. All rights reserved.`;
    }
});


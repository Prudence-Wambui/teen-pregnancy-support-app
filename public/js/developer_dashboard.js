// JS File: /public/js/developer_dashboard.js

// Sidebar Toggle Logic
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarTitle = document.getElementById('sidebar-title');
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a span');
    const yearSpan = document.getElementById('year');
  
    // Sidebar collapse/expand toggle
    menuToggle?.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      sidebarTitle.classList.toggle('hidden');
      sidebarLinks.forEach(span => span.classList.toggle('hidden'));
    });
  
    // Auto-update year
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  });
  
// public/js/notifications.js

document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const notifications = document.querySelectorAll('.notification-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.querySelector('.filter-btn.active');
      if (current) {
        current.classList.remove('active');
        current.setAttribute('aria-pressed', 'false');
      }
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      const filter = btn.dataset.filter;
      notifications.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Mark notification as read on click
  notifications.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.remove('unread');
    });
  });
});

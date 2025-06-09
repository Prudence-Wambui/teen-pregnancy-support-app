// public/js/notifications.js

document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const notifications = document.querySelectorAll('.notification-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.filter-btn.active').classList.remove('active');
      btn.classList.add('active');
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

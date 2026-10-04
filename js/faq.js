document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-faq-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      if (!item) return;
      const isCollapsed = item.classList.toggle('is-collapsed');
      button.setAttribute('aria-expanded', String(!isCollapsed));
    });
  });
});

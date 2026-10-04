document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-accordion-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.esclerose-multipla-accordion__item');
      if (!item) return;
      const isCollapsed = item.classList.toggle('is-collapsed');
      button.setAttribute('aria-expanded', String(!isCollapsed));
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-types-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.esclerose-multipla-types-card');
      if (!card) return;
      const isCollapsed = card.classList.toggle('is-collapsed');
      button.setAttribute('aria-expanded', String(!isCollapsed));
    });
  });
});

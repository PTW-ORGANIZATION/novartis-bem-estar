document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-type-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.asma-grave-types__card');
      if (!card) return;
      const isCollapsed = card.classList.toggle('is-collapsed');
      button.setAttribute('aria-expanded', String(!isCollapsed));
    });
  });
});

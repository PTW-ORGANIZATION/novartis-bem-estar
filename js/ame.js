document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-type-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.ame-types__card');
      if (!card) return;
      const isCollapsed = card.classList.toggle('is-collapsed');
      button.setAttribute('aria-expanded', String(!isCollapsed));
    });
  });

  document.querySelectorAll('[data-diagnosis-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.ame-diagnosis__item');
      if (!item) return;
      const isCollapsed = item.classList.toggle('is-collapsed');
      button.setAttribute('aria-expanded', String(!isCollapsed));
    });
  });
});

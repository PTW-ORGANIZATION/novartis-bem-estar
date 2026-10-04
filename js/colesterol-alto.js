document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.colesterol-alto-measures__item [data-accordion-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.colesterol-alto-measures__item');
      if (!item) return;
      const isCollapsed = item.classList.toggle('is-collapsed');
      button.setAttribute('aria-expanded', String(!isCollapsed));
    });
  });

  document.querySelectorAll('.colesterol-alto-team__card [data-accordion-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.colesterol-alto-team__card');
      if (!card) return;
      const isCollapsed = card.classList.toggle('is-collapsed');
      button.setAttribute('aria-expanded', String(!isCollapsed));
    });
  });
});

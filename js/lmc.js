document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lmc-accordion__item [data-accordion-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.lmc-accordion__item');
      if (!item) return;
      const isCollapsed = item.classList.toggle('is-collapsed');
      button.setAttribute('aria-expanded', String(!isCollapsed));
    });
  });
});

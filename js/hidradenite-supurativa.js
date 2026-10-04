document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hidradenite-supurativa-living-item [data-accordion-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.hidradenite-supurativa-living-item');
      if (!item) return;
      const isCollapsed = item.classList.toggle('is-collapsed');
      button.setAttribute('aria-expanded', String(!isCollapsed));
    });
  });
});

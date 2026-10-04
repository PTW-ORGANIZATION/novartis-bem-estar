document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-symptom-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.artrite-psoriasica-symptoms__card');
      if (!card) return;
      const isCollapsed = card.classList.toggle('is-collapsed');
      button.setAttribute('aria-expanded', String(!isCollapsed));
    });
  });
});

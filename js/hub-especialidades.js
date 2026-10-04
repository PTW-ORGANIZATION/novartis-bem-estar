document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('[data-panel-toggle]');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const panel = button.closest('.specialty-panel');
      if (!panel) return;
      const wasCollapsed = panel.classList.contains('is-collapsed');

      buttons.forEach((otherButton) => {
        const otherPanel = otherButton.closest('.specialty-panel');
        if (!otherPanel) return;
        otherPanel.classList.add('is-collapsed');
        otherButton.setAttribute('aria-expanded', 'false');
      });

      if (wasCollapsed) {
        panel.classList.remove('is-collapsed');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
});

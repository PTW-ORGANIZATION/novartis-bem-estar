document.addEventListener('DOMContentLoaded', () => {
  const facitButtons = document.querySelectorAll('.hpn-facit [data-accordion-toggle]');

  facitButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.hpn-facit__card');
      if (!card) return;
      const wasCollapsed = card.classList.contains('is-collapsed');

      facitButtons.forEach((otherButton) => {
        const otherCard = otherButton.closest('.hpn-facit__card');
        if (!otherCard) return;
        otherCard.classList.add('is-collapsed');
        otherButton.setAttribute('aria-expanded', 'false');
      });

      if (wasCollapsed) {
        card.classList.remove('is-collapsed');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
});

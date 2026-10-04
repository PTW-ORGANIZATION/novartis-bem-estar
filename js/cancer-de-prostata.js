document.addEventListener('DOMContentLoaded', () => {
  const bar = document.querySelector('.cancer-de-prostata-types__bar');
  if (!bar) return;

  const labels = bar.querySelectorAll('[data-count-target]');
  const duration = 900;

  function animateCount(el, target) {
    const start = performance.now();

    function step(now) {
      const progress = Math.min(Math.max((now - start) / duration, 0), 1);
      const value = Math.round(progress * target);
      el.textContent = `${value}%`;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  bar.addEventListener('mouseenter', () => {
    labels.forEach((el) => {
      animateCount(el, Number(el.dataset.countTarget));
    });
  });

  bar.addEventListener('mouseleave', () => {
    labels.forEach((el) => {
      el.textContent = `${el.dataset.countTarget}%`;
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-accordion-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.cancer-de-prostata-accordion__item');
      if (!item) return;
      const isCollapsed = item.classList.toggle('is-collapsed');
      button.setAttribute('aria-expanded', String(!isCollapsed));
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const stagingButtons = document.querySelectorAll('[data-staging-toggle]');

  stagingButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.cancer-de-prostata-staging-card');
      if (!card) return;
      const wasCollapsed = card.classList.contains('is-collapsed');

      stagingButtons.forEach((otherButton) => {
        const otherCard = otherButton.closest('.cancer-de-prostata-staging-card');
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

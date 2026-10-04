function initStepsAccordion() {
  const items = document.querySelectorAll("[data-accordion-toggle]");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      const isExpanded = item.getAttribute("aria-expanded") === "true";

      items.forEach((other) => other.setAttribute("aria-expanded", "false"));

      item.setAttribute("aria-expanded", String(!isExpanded));
    });
  });
}

function initMobileReorder() {
  const mobileQuery = window.matchMedia("(max-width: 600px)");

  function setupReparent(el, anchor) {
    if (!el || !anchor) return;
    const originalParent = el.parentNode;
    const originalNext = el.nextSibling;

    function place() {
      if (mobileQuery.matches) {
        anchor.insertAdjacentElement("beforebegin", el);
      } else if (originalNext) {
        originalParent.insertBefore(el, originalNext);
      } else {
        originalParent.appendChild(el);
      }
    }

    place();
    mobileQuery.addEventListener("change", place);
  }

  setupReparent(document.querySelector(".pbe-video"), document.querySelector(".pbe-intro__text .btn"));
  setupReparent(document.querySelector(".pbe-participate__image"), document.querySelector(".pbe-participate__content .btn"));
}

function initBenefitsCarousel() {
  const track = document.querySelector(".benefit-grid");
  const dotsContainer = document.querySelector("[data-benefit-dots]");
  if (!track || !dotsContainer) return;

  const cards = Array.from(track.children);
  dotsContainer.innerHTML = cards.map((_, i) => `<button type="button" aria-label="Item ${i + 1}" class="${i === 0 ? "is-active" : ""}"></button>`).join("");
  const dots = Array.from(dotsContainer.children);

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      track.scrollTo({ left: cards[i].offsetLeft, behavior: "smooth" });
    });
  });

  let syncTimer;
  track.addEventListener("scroll", () => {
    clearTimeout(syncTimer);
    syncTimer = setTimeout(() => {
      let closest = 0;
      let closestDistance = Infinity;
      cards.forEach((card, i) => {
        const distance = Math.abs(card.offsetLeft - track.scrollLeft);
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = i;
        }
      });
      dots.forEach((dot, i) => dot.classList.toggle("is-active", i === closest));
    }, 100);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initStepsAccordion();
  initMobileReorder();
  initBenefitsCarousel();
});

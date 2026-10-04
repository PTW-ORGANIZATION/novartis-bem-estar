function initAfterInfarctoAccordion() {
  const items = document.querySelectorAll("[data-accordion-toggle]");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      const isExpanded = item.getAttribute("aria-expanded") === "true";
      item.setAttribute("aria-expanded", String(!isExpanded));
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initAfterInfarctoAccordion();
});

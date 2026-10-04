function renderSpecialtyGrid() {
  const grid = document.querySelector(".specialty-grid");
  if (!grid || typeof SPECIALTY_CONDITIONS === "undefined") return;

  const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

  grid.innerHTML = Object.entries(SPECIALTY_CONDITIONS)
    .map(([key, specialty]) => {
      const items = specialty.conditions
        .map(
          (condition) => `
            <div class="specialty-panel__item">
              <img src="/assets/icons/${condition.icon}">
              <span>${condition.label}</span>
            </div>
          `
        )
        .join("");

      return `
        <div class="specialty-panel is-collapsed">
          <button type="button" class="specialty-panel__header" data-panel-toggle aria-expanded="false">
            <h2>${capitalize(specialty.label)}</h2>
            <img src="/assets/icons/accordion-chevron.svg" class="specialty-panel__chevron">
          </button>
          <div class="specialty-panel__body">
            <div class="specialty-panel__items">
              ${items}
            </div>
            <a href="/pages/${key}.html" class="btn specialty-panel__cta">Mais sobre ${specialty.label}</a>
          </div>
        </div>
      `;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", renderSpecialtyGrid);

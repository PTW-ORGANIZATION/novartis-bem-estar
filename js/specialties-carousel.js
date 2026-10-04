function renderSpecialtyCards() {
  const track = document.querySelector("[data-carousel='specialties']");
  if (!track || typeof SPECIALTY_CONDITIONS === "undefined") return;

  const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

  track.innerHTML = Object.entries(SPECIALTY_CONDITIONS)
    .map(
      ([key, specialty]) => `
      <a href="/pages/${key}.html" class="specialty-card">
        <div class="specialty-card__image">
          <img src="/assets/images/${specialty.cardImage}">
        </div>
        <div class="specialty-card__body">
          <span class="tag">Especialidade</span>
          <h3>${capitalize(specialty.label)}</h3>
          <p>${specialty.cardDescription}</p>
        </div>
      </a>
    `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", renderSpecialtyCards);

const ROOT_PREFIX = location.pathname.indexOf("/pages/") !== -1 ? "../" : "";

async function includePartial(selector, url) {
  const els = document.querySelectorAll(selector);
  if (!els.length) return;
  const res = await fetch(ROOT_PREFIX + url);
  let html = await res.text();
  html = html.replace(/((?:href|src|action)=")\/(?!\/)/g, "$1" + ROOT_PREFIX);
  els.forEach((el) => (el.innerHTML = html));
}

const SPECIALTY_CONDITIONS = {
  cardiologia: {
    label: "cardiologia",
    cardDescription: "Informação e cuidado para a saúde do coração",
    cardImage: "specialty-cardiologia.png",
    cardImageTitle: "Casal idoso abraçado e sorrindo ao ar livre",
    cardImageAlt: "Homem e mulher sêniores abraçados e rindo em uma área arborizada ao pôr do sol.",
    conditions: [
      { label: "Infarto", icon: "condition-infarto.svg", href: ROOT_PREFIX + "pages/infarto.html" },
      { label: "Colesterol Alto", icon: "condition-colesterol-alto.svg", href: ROOT_PREFIX + "pages/colesterol-alto.html" },
    ],
  },
  dermatologia: {
    label: "dermatologia",
    cardDescription: "Informação e cuidado para saúde da pele",
    cardImage: "specialty-dermatologia.png",
    cardImageTitle: "Homem sorridente em área externa",
    cardImageAlt: "Homem de cabelo afro sorrindo para a câmera em uma área externa, com outra pessoa ao fundo.",
    conditions: [
      { label: "Hidradenite Supurativa", icon: "condition-hidradenite-supurativa.svg", href: ROOT_PREFIX + "pages/hidradenite-supurativa.html" },
      { label: "Furúnculo", icon: "condition-furunculo.svg", href: ROOT_PREFIX + "pages/furunculo.html" },
      { label: "Urticária (UCE)", icon: "condition-urticaria.svg", href: ROOT_PREFIX + "pages/urticaria-uce.html" },
      { label: "Psoríase", icon: "condition-psoriase.svg", href: ROOT_PREFIX + "pages/psoriase.html" },
    ],
  },
  hematologia: {
    label: "hematologia",
    cardDescription: "Informação e cuidado para as do sangue e da medula óssea",
    cardImage: "specialty-hematologia.png",
    cardImageTitle: "Casal brindando com bebidas em dia ensolarado na praia",
    cardImageAlt: "Homem de dreadlocks e mulher sorridente sentados na areia da praia, brindando com garrafas de bebida sob a luz do sol.",
    conditions: [
      { label: "Hemoglobinúria Paroxística Noturna (HPN)", icon: "condition-hpn.svg", href: ROOT_PREFIX + "pages/hpn.html" },
      { label: "Leucemia Mieloide Crônica (LMC)", icon: "condition-lmc.svg", href: ROOT_PREFIX + "pages/lmc.html" },
      { label: "Mielofibrose", icon: "condition-mielofibrose.svg", href: ROOT_PREFIX + "pages/mielofibrose.html" },
    ],
  },
  nefrologia: {
    label: "nefrologia",
    cardDescription: "Informação e cuidado para a saúde dos rins",
    cardImage: "specialty-nefrologia.png",
    cardImageTitle: "Família reunida sorrindo no sofá de casa",
    cardImageAlt: "Avô, mãe e garotinho sentados juntos em um sofá na sala de estar, interagindo alegremente.",
    conditions: [{ label: "Doenças Renais Graves (C3G e IgAN)", icon: "condition-doencas-renais-graves.svg", href: ROOT_PREFIX + "index.html" }],
  },
  neurologia: {
    label: "neurologia",
    cardDescription: "Informação e cuidado para saúde neurológica",
    cardImage: "specialty-neurologia.png",
    cardImageTitle: "Avó segurando bebê ao ar livre",
    cardImageAlt: "Mulher idosa segurando um bebê no ar com carinho no jardim em frente a uma casa.",
    conditions: [
      { label: "Esclerose Múltipla", icon: "condition-esclerose-multipla.svg", href: ROOT_PREFIX + "pages/esclerose-multipla.html" },
      { label: "Atrofia Muscular Espinhal (AME)", icon: "condition-ame.svg", href: ROOT_PREFIX + "pages/ame.html" },
    ],
  },
  oncologia: {
    label: "oncologia",
    cardDescription: "Informação e cuidado ao logo da jornada oncológica",
    cardImage: "specialty-oncologia.png",
    cardImageTitle: "Prática de yoga ao ar livre em grupo",
    cardImageAlt: "Mulher de camiseta roxa com os braços abertos olhando para cima durante aula de yoga ao ar livre.",
    conditions: [
      { label: "Câncer de Mama", icon: "condition-cancer-mama.svg", href: ROOT_PREFIX + "pages/cancer-de-mama.html" },
      { label: "Câncer de Próstata", icon: "condition-cancer-prostata.svg", href: ROOT_PREFIX + "pages/cancer-de-prostata.html" },
    ],
  },
  pneumologia: {
    label: "pneumologia",
    cardDescription: "Informação e cuidado para a saúde dos pulmões e da respiração",
    cardImage: "specialty-pneumologia.png",
    cardImageTitle: "Mãe carregando filho pequeno nas costas perto da janela",
    cardImageAlt: "Mulher sorridente carregando garotinho nas costas em um ambiente interno iluminado por luz natural.",
    conditions: [{ label: "Asma Grave", icon: "condition-asma-grave.svg", href: ROOT_PREFIX + "pages/asma-grave.html" }],
  },
  reumatologia: {
    label: "reumatologia",
    cardDescription: "Informação e cuidado para a saúde das articulações e dos músculos",
    cardImage: "specialty-reumatologia.png",
    cardImageTitle: "Homem sorridente de capacete andando de bicicleta",
    cardImageAlt: "Homem de capacete e camiseta azul sorrindo enquanto anda de bicicleta em uma via arborizada.",
    conditions: [
      { label: "Artrite Psoriásica", icon: "condition-artrite-psoriasica.svg", href: ROOT_PREFIX + "pages/artrite-psoriasica.html" },
      { label: "Dor nas Costas", icon: "condition-dor-nas-costas.svg", href: ROOT_PREFIX + "pages/dor-nas-costas.html" },
    ],
  },

};

function closeDropdownPanel(name) {
  const toggle = document.querySelector(`[data-dropdown-toggle="${name}"]`);
  const panel = document.querySelector(`[data-dropdown-panel="${name}"]`);
  if (toggle) toggle.setAttribute("aria-expanded", "false");
  if (panel) panel.classList.remove("is-open");
}

function openDropdownPanel(name) {
  document.querySelectorAll("[data-dropdown-toggle]").forEach((btn) => {
    if (btn.dataset.dropdownToggle !== name) closeDropdownPanel(btn.dataset.dropdownToggle);
  });
  const toggle = document.querySelector(`[data-dropdown-toggle="${name}"]`);
  const panel = document.querySelector(`[data-dropdown-panel="${name}"]`);
  if (toggle) toggle.setAttribute("aria-expanded", "true");
  if (panel) panel.classList.add("is-open");
}

function renderSpecialtyConditions(specialtyKey) {
  const row = document.querySelector("[data-conditions-row]");
  if (!row) return;
  const data = SPECIALTY_CONDITIONS[specialtyKey];
  if (!data) {
    row.classList.remove("is-open");
    row.innerHTML = "";
    return;
  }

  const pills = data.conditions
    .map(
      (condition) =>
        `<a href="${condition.href}" class="navbar__condition"><img src="${ROOT_PREFIX}assets/icons/${condition.icon}" alt="">${condition.label}</a>`
    )
    .join("");

  row.innerHTML = `${pills}<a href="${ROOT_PREFIX}pages/${specialtyKey}.html" class="navbar__condition navbar__condition--cta">Mais sobre ${data.label}</a>`;
  row.classList.add("is-open");
}

function renderPageConditions() {
  document.querySelectorAll("[data-condition-grid]").forEach((grid) => {
    const specialtyKey = grid.getAttribute("data-condition-grid");
    const data = SPECIALTY_CONDITIONS[specialtyKey];
    if (!data) return;

    grid.classList.toggle("condition-grid--single", data.conditions.length === 1);
    grid.innerHTML = data.conditions
      .map(
        (condition) =>
          `<a href="${condition.href}" class="condition-item"><img src="${ROOT_PREFIX}assets/icons/${condition.icon}" alt=""><span>${condition.label}</span></a>`
      )
      .join("");
  });
}

function initHeader() {
  const toggles = document.querySelectorAll("[data-nav-toggle]");
  const menu = document.querySelector("[data-nav-menu]");

  if (toggles.length && menu) {
    toggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("is-open");
        if (isOpen) document.dispatchEvent(new CustomEvent("request-close-search"));
        toggles.forEach((t) => t.setAttribute("aria-expanded", String(isOpen)));
        document.body.style.overflow = isOpen ? "hidden" : "";
        document.documentElement.style.overflow = isOpen ? "hidden" : "";
      });
    });

    document.addEventListener("request-close-nav-menu", () => {
      if (!menu.classList.contains("is-open")) return;
      menu.classList.remove("is-open");
      toggles.forEach((t) => t.setAttribute("aria-expanded", "false"));
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    });
  }

  const mobileMenuQuery = window.matchMedia("(max-width: 1180px)");
  document.querySelectorAll("[data-dropdown-toggle]").forEach((button) => {
    const name = button.dataset.dropdownToggle;
    const panel = document.querySelector(`[data-dropdown-panel="${name}"]`);
    if (panel) {
      const originalParent = panel.parentNode;
      const originalNext = panel.nextSibling;
      const placePanel = () => {
        if (mobileMenuQuery.matches) {
          button.insertAdjacentElement("afterend", panel);
        } else if (originalNext) {
          originalParent.insertBefore(panel, originalNext);
        } else {
          originalParent.appendChild(panel);
        }
      };
      placePanel();
      mobileMenuQuery.addEventListener("change", placePanel);
    }

    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        closeDropdownPanel(name);
      } else {
        openDropdownPanel(name);
      }
    });
  });

  const conditionsRow = document.querySelector("[data-conditions-row]");
  if (conditionsRow) {
    const conditionsOriginalParent = conditionsRow.parentNode;
    const conditionsOriginalNext = conditionsRow.nextSibling;
    mobileMenuQuery.addEventListener("change", (event) => {
      if (!event.matches) {
        if (conditionsOriginalNext) {
          conditionsOriginalParent.insertBefore(conditionsRow, conditionsOriginalNext);
        } else {
          conditionsOriginalParent.appendChild(conditionsRow);
        }
      }
    });
  }

  document.querySelectorAll("[data-specialty-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.specialtyToggle;
      const isActive = button.classList.contains("is-active");
      const row = document.querySelector("[data-conditions-row]");

      document.querySelectorAll("[data-specialty-toggle]").forEach((btn) => btn.classList.remove("is-active"));

      if (isActive) {
        renderSpecialtyConditions(null);
      } else {
        button.classList.add("is-active");
        renderSpecialtyConditions(key);
        if (row && mobileMenuQuery.matches) {
          button.insertAdjacentElement("afterend", row);
        }
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) {
      document.querySelectorAll("[data-dropdown-toggle]").forEach((btn) => closeDropdownPanel(btn.dataset.dropdownToggle));
    }
  });
}

function initFooter() {
  const backToTop = document.querySelector("[data-back-to-top]");
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const toggleVisibility = () => {
      backToTop.classList.toggle("is-visible", window.scrollY > 400);
    };
    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([
    includePartial("[data-include='header']", "partials/header.html"),
    includePartial("[data-include='footer']", "partials/footer.html"),
    includePartial("[data-include='a11y']", "partials/accessibility-widget.html"),
  ]);

  await includePartial("[data-include='logo']", "partials/logo.html");

  initHeader();
  initFooter();
  renderPageConditions();
  if (window.initSearchAutocomplete) window.initSearchAutocomplete();

  document.dispatchEvent(new CustomEvent("partials:loaded"));
});

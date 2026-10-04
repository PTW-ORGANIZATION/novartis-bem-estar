(function () {
  var FILTERS = [
    { slug: "todos", label: "Todos os temas" },
    { slug: "artrite-psoriasica", label: "Artrite Psoriásica" },
    { slug: "asma-grave", label: "Asma Grave" },
    { slug: "ame", label: "AME" },
    { slug: "c3g", label: "C3G" },
    { slug: "cancer-de-mama", label: "Câncer de Mama" },
    { slug: "cancer-de-prostata", label: "Câncer de Próstata" },
    { slug: "colesterol-alto", label: "Colesterol Alto" },
    { slug: "dor-nas-costas", label: "Dor nas Costas" },
    { slug: "esclerose-multipla", label: "Esclerose Múltipla" },
    { slug: "furunculo", label: "Furúnculo" },
    { slug: "hidradenite-supurativa", label: "Hidradenite Supurativa" },
    { slug: "hpn", label: "HPN" },
    { slug: "infarto", label: "Infarto" },
    { slug: "lmc", label: "LMC" },
    { slug: "mielofibrose", label: "Mielofibrose" },
    { slug: "psoriase", label: "Psoríase" },
    { slug: "urticaria", label: "Urticária" },
  ];

  var SLUGS = [
    "cancer-de-mama",
    "cancer-de-prostata",
    "ame",
    "c3g",
    "colesterol-alto",
    "esclerose-multipla",
    "hidradenite-supurativa",
    "psoriase",
    "artrite-psoriasica",
    "dor-nas-costas",
    "urticaria",
  ];

  var SECOND_TAG_START_INDEX = 6;

  function renderFilters() {
    var container = document.querySelector("[data-filters]");
    if (!container) return;

    FILTERS.forEach(function (filter) {
      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "filter-chip" + (filter.slug === "todos" ? " is-active" : "");
      chip.dataset.filter = filter.slug;
      chip.textContent = filter.label;
      container.appendChild(chip);
    });
  }

  var PLACEHOLDER = {
    title: "Lisi etiam dignissim diam quis velit dignissim",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing eliquam blandit commodo justo...",
    likes: "5.6k",
    readTime: "2:00",
    days: "10 dias",
  };

  function render() {
    document.querySelectorAll("[data-article]").forEach(function (placeholder) {
      var slug = placeholder.getAttribute("data-article");
      var index = SLUGS.indexOf(slug);
      if (index === -1) return;

      var category = index < SECOND_TAG_START_INDEX ? "Câncer de Mama" : "Psoríase";

      var card = document.createElement("a");
      card.href = "/pages/artigo.html";
      card.className = "article-card";
      card.dataset.category = slug;

      var imageWrap = document.createElement("div");
      imageWrap.className = "article-card__image";

      var body = document.createElement("div");
      body.className = "article-card__body";
      body.innerHTML =
        "<span class=\"tag tag--light\">" + category + "</span>" +
        "<h3>" + PLACEHOLDER.title + "</h3>" +
        "<p>" + PLACEHOLDER.description + "</p>" +
        "<div class=\"article-card__meta\">" +
        "<span><img src=\"/assets/icons/icon-like.svg\">" + PLACEHOLDER.likes + "</span>" +
        "<span><img src=\"/assets/icons/icon-timer.svg\">" + PLACEHOLDER.readTime + "</span>" +
        "<span><img src=\"/assets/icons/icon-calendar.svg\">" + PLACEHOLDER.days + "</span>" +
        "</div>";

      card.appendChild(imageWrap);
      card.appendChild(body);
      placeholder.replaceWith(card);
    });
  }

  var RANKS = [
    { label: "1º mais acessado", modifier: "rank-tag--gold" },
    { label: "2º mais acessado", modifier: "rank-tag--silver" },
    { label: "3º mais acessado", modifier: "rank-tag--bronze" },
  ];

  function renderPopular() {
    document.querySelectorAll("[data-popular]").forEach(function (placeholder) {
      var index = parseInt(placeholder.getAttribute("data-popular"), 10);
      var rank = RANKS[index];
      if (!rank) return;

      var card = document.createElement("a");
      card.href = "/pages/artigo.html";
      card.className = "popular-card";

      var imageWrap = document.createElement("div");
      imageWrap.className = "popular-card__image";

      var body = document.createElement("div");
      body.className = "popular-card__body";
      body.innerHTML =
        "<div class=\"popular-card__tags\">" +
        "<span class=\"rank-tag " + rank.modifier + "\">" + rank.label + "</span>" +
        "<span class=\"tag tag--dark\">Câncer de Próstata</span>" +
        "</div>" +
        "<h3>" + PLACEHOLDER.title + "</h3>" +
        "<p>" + PLACEHOLDER.description + "</p>" +
        "<div class=\"article-card__meta\">" +
        "<span><img src=\"/assets/icons/icon-like.svg\">" + PLACEHOLDER.likes + "</span>" +
        "<span><img src=\"/assets/icons/icon-timer.svg\">" + PLACEHOLDER.readTime + "</span>" +
        "<span><img src=\"/assets/icons/icon-calendar.svg\">" + PLACEHOLDER.days + "</span>" +
        "</div>";

      card.appendChild(imageWrap);
      card.appendChild(body);
      placeholder.replaceWith(card);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderFilters();
    render();
    renderPopular();
  });
})();

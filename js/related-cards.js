(function () {
  var ROOT_PREFIX = location.pathname.indexOf("/pages/") !== -1 ? "../" : "";
  var RELATED = {
    "pele-dia-a-dia": "Cuidados essenciais com a pele no dia a dia",
    "doencas-neurologicas-raras": "Sinais de alerta em doenças neurológicas raras",
    "saude-dos-rins": "Como cuidar da saúde dos rins no dia a dia",
    "complicacoes-cardiacas": "Colesterol alto: como prevenir complicações cardíacas",
    "dor-nas-articulacoes": "Dor nas articulações: quando procurar um especialista",
    "asma-grave-sintomas": "Asma grave: sintomas que merecem atenção",
    "doencas-raras-sangue": "Entenda as doenças raras do sangue e da medula óssea",
    "acompanhamento-oncologico": "A importância do acompanhamento oncológico contínuo",
    "c3g-doenca-renal-rara": "C3G: uma doença renal rara que exige atenção",
    "hidradenite-primeiros-sinais": "Hidradenite supurativa: identificando os primeiros sinais",
  };

  function render() {
    document.querySelectorAll("[data-related]").forEach(function (placeholder) {
      var slug = placeholder.getAttribute("data-related");
      var title = RELATED[slug];
      if (!title) return;

      var card = document.createElement("a");
      card.href = ROOT_PREFIX + "pages/artigo.html";
      card.className = "related-card";

      var imageWrap = document.createElement("div");
      imageWrap.className = "related-card__image";

      var body = document.createElement("div");
      body.className = "related-card__body";
      body.innerHTML = "<span class=\"tag tag--dark\">Condição</span><h3>" + title + "</h3>";

      card.appendChild(imageWrap);
      card.appendChild(body);
      placeholder.replaceWith(card);
    });
  }

  document.addEventListener("DOMContentLoaded", render);
})();

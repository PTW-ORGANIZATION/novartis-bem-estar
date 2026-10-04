(function () {
  var CAMPAIGNS = {
    ame: {
      image: "campaign-ame.png",
      title: "AME com esperança",
      alt: "Peça em fundo claro. No canto superior esquerdo, lê-se \"Nasce aqui um tratado de amor\" e, em destaque, o título \"Ame com esperança\". Abaixo, aparece o texto: \"Existe tratamento para AME. Evite esperar para começar: a vida com mais qualidade.\" Na parte inferior esquerda, há um logotipo relacionado à campanha. À direita, aparece um bebê deitado de barriga para baixo sobre uma superfície clara, olhando para baixo. Ao fundo, há pequenos elementos gráficos delicados, como corações e traços ilustrativos.",
      category: "Atrofia Muscular Espinhal (AME)",
      heading: "AME com esperança",
      description: "A atrofia muscular espinhal é uma doença genética rara e progressiva, que...",
      specialty: "neurologia",
    },
    c3g: {
      image: "campaign-c3g.png",
      title: "Se meu xixi falasse",
      alt: "Peça ilustrada com fundo rosa intenso. À esquerda, há um personagem amarelo em formato de gota, com braços, pernas e expressão sorridente. À direita, dentro de um balão preto, aparece a frase \"Se meu xixi falasse\", com destaque para a palavra \"xixi\" em letras grandes amarelas.",
      category: "C3G",
      heading: "Se meu xixi falasse",
      description: "O nome pode parecer rede de internet, mas C3G é uma doença renal rara caus...",
      specialty: "nefrologia",
    },
    "cancer-mama": {
      image: "campaign-cancer-mama.png",
      title: "#MeuCaminho",
      alt: "Peça com fundo em degradê roxo. Ao centro, aparecem cinco mulheres de diferentes idades e perfis, posicionadas lado a lado e sorrindo. Na parte inferior, em letras grandes brancas, lê-se \"#Meu Caminho\".",
      category: "Câncer de Mama",
      heading: "#MeuCaminho",
      description: "Ao receber o diagnóstico de câncer de mama, muitas questões surgem. O que...",
      specialty: "oncologia",
    },
    colesterol: {
      image: "campaign-colesterol.png",
      title: "Infartei. E agora?",
      alt: "Peça com fundo azul e uma linha curva amarelas. Ao centro, em letras grandes e tridimensionais nas cores vermelha e branca, aparece a pergunta: \"Infartei. E agora?\".",
      category: "Colesterol Alto",
      heading: "Infartei e agora?",
      description: "Se você já teve um infarto, o seu nível de colesterol ruim (LDL-c) precisa se mant...",
      specialty: "cardiologia",
      specialtyCategory: "Infarto",
    },
    "esclerose-multipla": {
      image: "campaign-esclerose-multipla.png",
      title: "Escrevendo Minhas Histórias",
      alt: "Peça em fundo rosado, com elementos gráficos que lembram aspas e molduras. No centro, aparece o título \"Escrevendo Minhas Histórias\". Abaixo, lê-se: \"Porque entender a EM é transformar desafios em múltiplas possibilidades.\" Na parte inferior, em uma faixa azul, está a frase: \"Aqui, cada palavra aproxima.\"",
      category: "Esclerose Múltipla (EM)",
      heading: "Escrevendo Minhas Histórias",
      description: "Por que entender a EM é transformar de...",
      specialty: "neurologia",
    },
    furunculo: {
      image: "campaign-hidradenite.png",
      title: "Será que é furúnculo?",
      alt: "Imagem ilustrada em fundo claro com a frase \"Será que é furúnculo?\" em letras grandes e coloridas. Ao lado do texto, aparece um personagem em formato arredondado, usando óculos, com expressão de dúvida. À esquerda, há outra ilustração colorida relacionada à campanha.",
      category: "Furúnculo",
      heading: "Será que é furúnculo?",
      description: "Tem cara de furúnculo, mas pode ser mais grave. Cuidado com o disfarce do furúnc...",
      specialty: "dermatologia",
    },
    psoriase: {
      image: "campaign-psoriase.png",
      title: "Sob a pele",
      alt: "Peça em fundo claro. À esquerda, há a fotografia aproximada de uma região da pele com placas avermelhadas e descamativas. À direita, aparece o título \"Sob a pele\" e, abaixo, a frase \"A psoríase pode ir além da pele!\". Na sequência, lê-se: \"É importante entender os sinais que podem aumentar os riscos de progressão para uma psoríase artrítica. Psoríase é saber como agir no momento certo.\"",
      category: "Psoríase",
      heading: "Sob a pele",
      description: "É importante entender os sinais que podem aumentar os riscos de progressã...",
      specialty: "dermatologia",
    },
  };

  var SPECIALTY_LABELS = {
    cardiologia: "Cardiologia",
    dermatologia: "Dermatologia",
    hematologia: "Hematologia",
    nefrologia: "Nefrologia",
    neurologia: "Neurologia",
    oncologia: "Oncologia",
    pneumologia: "Pneumologia",
    reumatologia: "Reumatologia",
  };

  function buildCard(slug, categoryOverride, linked) {
    var data = CAMPAIGNS[slug];
    if (!data) return null;

    var category = categoryOverride || data.category;
    var card = document.createElement(linked ? "a" : "div");
    card.className = "campaign-card";
    if (linked) card.href = "/pages/campanhas.html";

    var imageWrap = document.createElement("div");
    imageWrap.className = "campaign-card__image";
    var img = document.createElement("img");
    img.src = "/assets/images/" + data.image;
    img.title = data.title;
    img.alt = data.alt;
    imageWrap.appendChild(img);

    var body = document.createElement("div");
    body.className = "campaign-card__body";
    body.innerHTML =
      "<span class=\"campaign-card__category\">" + category + "</span>" +
      "<h3>" + data.heading + "</h3>" +
      "<p>" + data.description + "</p>";

    card.appendChild(imageWrap);
    card.appendChild(body);
    return card;
  }

  function buildEmptyCard() {
    var card = document.createElement("div");
    card.className = "campaign-card campaign-card--empty";
    card.innerHTML =
      "<div class=\"campaign-card__image\"></div>" +
      "<div class=\"campaign-card__body\">" +
      "<span class=\"campaign-card__placeholder campaign-card__placeholder--tag\"></span>" +
      "<span class=\"campaign-card__placeholder campaign-card__placeholder--title\"></span>" +
      "<span class=\"campaign-card__placeholder campaign-card__placeholder--line\"></span>" +
      "<span class=\"campaign-card__placeholder campaign-card__placeholder--line-short\"></span>" +
      "</div>";
    return card;
  }

  function render() {
    document.querySelectorAll("[data-campaign]").forEach(function (placeholder) {
      var slug = placeholder.getAttribute("data-campaign");
      var categoryOverride = placeholder.getAttribute("data-campaign-category");
      var linked = placeholder.hasAttribute("data-campaign-linked");
      var card = buildCard(slug, categoryOverride, linked);
      if (card) placeholder.replaceWith(card);
    });
  }

  function renderSpecialtyCampaigns() {
    document.querySelectorAll("[data-specialty-campaigns]").forEach(function (grid) {
      var specialty = grid.getAttribute("data-specialty-campaigns");
      var slugs = Object.keys(CAMPAIGNS).filter(function (slug) {
        return CAMPAIGNS[slug].specialty === specialty;
      });

      if (slugs.length === 0) {
        var label = SPECIALTY_LABELS[specialty] || specialty;
        grid.appendChild(buildEmptyCard());
        grid.appendChild(buildEmptyCard());
        var cta = document.createElement("div");
        cta.className = "campaign-card campaign-card--cta";
        cta.innerHTML =
          "<p>Não existem campanhas ativas sobre " + label + " no momento.</p>" +
          "<a href=\"/pages/campanhas.html\" class=\"btn\">Conheça outras campanhas</a>";
        grid.appendChild(cta);
        return;
      }

      slugs.forEach(function (slug) {
        var card = buildCard(slug, CAMPAIGNS[slug].specialtyCategory, false);
        if (card) grid.appendChild(card);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    render();
    renderSpecialtyCampaigns();
  });
})();

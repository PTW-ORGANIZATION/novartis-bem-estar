(function () {
  var RELATED_ARTICLES = {
    ame: [
      {
        image: "ame-article-sintomas.jpg",
        tag: "AME",
        title: "Sinais e sintomas da AME e doenças neuromusculares",
        description: "Comportamentos humanos essenciais, como engolir, respirar e locomover, dependem de um controle...",
        likes: "5.6k",
        readTime: "2 min",
        date: "08 jul 2025",
      },
      {
        image: "ame-article-rede-apoio.jpg",
        tag: "AME",
        title: "Rede de apoio em AME: saiba onde buscar ajuda",
        description: "Para tornar mais fácil a aceitação e a convivência com o diagnóstico da atrofia muscular espinhal...",
        likes: "5.6k",
        readTime: "2 min",
        date: "30 jun 2025",
      },
      {
        image: "ame-article-guia-completo.jpg",
        tag: "AME",
        title: "Guia completo sobre a AME",
        description: "Este guia foi feito para ajudar você a entender o diagnóstico de AME e agir com mais segurança...",
        likes: "5.6k",
        readTime: "2 min",
        date: "27 mai 2025",
      },
    ],
    "asma-grave": [
      {
        image: "asma-grave-artigo-corticoides.png",
        tag: "Asma Grave",
        title: "Riscos do uso de corticoides no tratamento da asma",
        description: "Não é novidade que o objetivo do tratamento da asma é prevenir as crises, mantendo a doença...",
        likes: "5.6k",
        readTime: "2 min",
        date: "08 jul 2025",
      },
      {
        image: "asma-grave-artigo-grave.png",
        tag: "Asma Grave",
        title: "A asma é uma doença grave e pode matar",
        description: "Infelizmente a asma ainda não tem cura, mas existem tratamentos capazes de controlar a doença a ponto...",
        likes: "5.6k",
        readTime: "2 min",
        date: "30 jun 2025",
      },
      {
        image: "asma-grave-artigo-alergica.png",
        tag: "Asma Grave",
        title: "Asma alérgica e asma não alérgica? Conheça as diferenças e semelhanças",
        description: "Pode ser difícil entender a relação da asma com a alergia (e como uma asma pode ser alérgica...",
        likes: "5.6k",
        readTime: "2 min",
        date: "27 mai 2025",
      },
    ],
    "cancer-de-mama": [
      {
        image: "cancer-de-mama-artigo-qualidade-vida.png",
        tag: "Câncer de Mama",
        title: "Qualidade de vida também faz parte do tratamento",
        description: "Cuidar de si não é só sobre exames e medicamentos. É também sobre manter, no seu tempo e no seu...",
        likes: "5.6k",
        readTime: "2 min",
        date: "08 jul 2025",
      },
      {
        image: "cancer-de-mama-artigo-saude-mental.png",
        tag: "Câncer de Mama",
        title: "Saúde mental: quando sentir também é cuidar",
        description: "Você já ouviu que precisa ser forte, mas ninguém precisa fingir que está tudo bem o tempo todo. E...",
        likes: "5.6k",
        readTime: "2 min",
        date: "30 jun 2025",
      },
      {
        image: "cancer-de-mama-artigo-direitos.png",
        tag: "Câncer de Mama",
        title: "Você tem direitos: conheça seus direitos como paciente com câncer de mama",
        description: "Receber o diagnóstico de câncer de mama metastático não é apenas um momento desafiador...",
        likes: "5.6k",
        readTime: "2 min",
        date: "27 mai 2025",
      },
    ],
    "cancer-de-prostata": [
      {
        image: "cancer-de-prostata-artigo-medicina-precisao.png",
        tag: "Câncer de Próstata",
        title: "Medicina de precisão no tratamento do câncer de próstata",
        description: "A medicina de precisão, também conhecida como medicina personalizada, é uma abordagem de...",
        likes: "5.6k",
        readTime: "2 min",
        date: "08 jul 2025",
      },
      {
        image: "cancer-de-prostata-artigo-jornada.png",
        tag: "Câncer de Próstata",
        title: "A jornada com Câncer de Próstata: conscientização, prevenção e qualidade...",
        description: "Um dos principais desafios no enfrentamento do câncer de próstata é a resistência de muitos...",
        likes: "5.6k",
        readTime: "2 min",
        date: "30 jun 2025",
      },
      {
        image: "cancer-de-prostata-artigo-tratamento.png",
        tag: "Câncer de Próstata",
        title: "Tratamento do câncer de próstata",
        description: "O tratamento do câncer de próstata deve ser feito de forma individualizada, por um médico especializado, após a definição dos riscos, benefícios e melhores...",
        likes: "5.6k",
        readTime: "2 min",
        date: "27 mai 2025",
      },
    ],
    "colesterol-alto": [
      {
        image: "colesterol-alto-artigo-niveis.png",
        imageCaption: "Imagem meramente ilustrativa.",
        tag: "Colesterol Alto",
        title: "O nível de colesterol ideal para pessoas de risco muito alto",
        description: "Se você já teve AVC ou infarto, o seu nível de LDL precisa se manter abaixo de 50 mg/dL. É comum...",
        likes: "5.6k",
        readTime: "2 min",
        date: "08 jul 2025",
      },
      {
        image: "colesterol-alto-artigo-convivendo.png",
        imageCaption: "Imagem meramente ilustrativa.",
        tag: "Colesterol Alto",
        title: "Convivendo com a hipercolesterolemia",
        description: "Se o seu exame de sangue apontou que as taxas de colesterol ruim (LDL) estão altas, é muito importante seguir o tratamento prescrito pelo médico e...",
        likes: "5.6k",
        readTime: "2 min",
        date: "30 jun 2025",
      },
      {
        image: "colesterol-alto-artigo-equipe.png",
        imageCaption: "Imagem meramente ilustrativa.",
        tag: "Colesterol Alto",
        title: "Colesterol alto: Equipe de tratamento",
        description: "Lidar com dislipidemias, como a hipercolesterolemia, requer colaboração multidisciplinar, incluindo especialistas como cardiologistas...",
        likes: "5.6k",
        readTime: "2 min",
        date: "27 mai 2025",
      },
    ],
    "dor-nas-costas": [
      {
        image: "dor-nas-costas-artigo-exercicio.png",
        tag: "Dor nas Costas",
        title: "Exercício físico e Espondiloartrite Axial",
        description: "Gillian Eames explica porque o movimento tem um papel tão importante no gerenciamento da Espondiloartrite Axial. Aumentar a conscientização...",
        likes: "5.6k",
        readTime: "2 min",
        date: "08 jul 2025",
      },
      {
        image: "dor-nas-costas-artigo-exame.png",
        tag: "Dor nas Costas",
        title: "Saiba mais sobre o exame para a suspeita de espondilite anquilosante",
        description: "O diagnóstico precoce pode fazer uma grande diferença no tratamento da espondilite...",
        likes: "5.6k",
        readTime: "2 min",
        date: "30 jun 2025",
      },
      {
        image: "dor-nas-costas-artigo-entesite.png",
        tag: "Dor nas Costas",
        title: "Entesite: possível sinal de espondilite anquilosante",
        description: "O nosso corpo dá sinais, ainda mais quando o assunto é saúde. A entesite, por exemplo, pode ser...",
        likes: "5.6k",
        readTime: "2 min",
        date: "27 mai 2025",
      },
    ],
    "esclerose-multipla": [
      {
        image: "esclerose-multipla-artigo-tipos.png",
        tag: "Esclerose Múltipla",
        title: "Entenda as diferentes tipos de Esclerose Multipla e suas particularidades",
        description: "A esclerose múltipla (EM) é considerada uma doença crônica, sendo contínua ao longo da vida. As...",
        likes: "5.6k",
        readTime: "2 min",
        date: "08 jul 2025",
      },
      {
        image: "esclerose-multipla-artigo-progressao.png",
        tag: "Esclerose Múltipla",
        title: "Progressão da Esclerose Múltipla: Entendendo o Caminho e Buscando...",
        description: "O que é a progressão na EM? A esclerose múltipla (EM) é uma doença que...",
        likes: "5.6k",
        readTime: "2 min",
        date: "30 jun 2025",
      },
      {
        image: "esclerose-multipla-artigo-mitos.png",
        tag: "Esclerose Múltipla",
        title: "Esclerose múltipla sem mistério: Mitos e verdades que você precisa saber",
        description: "A esclerose múltipla (EM) pode parecer uma doença neurológica complexa, mas fica muito mais fácil...",
        likes: "5.6k",
        readTime: "2 min",
        date: "27 mai 2025",
      },
    ],
    furunculo: [
      {
        image: "furunculo-artigo-sintomas.png",
        tag: "Furúnculo",
        title: "3 sintomas que o furúnculo pode ter",
        description: "O furúnculo é um dos tipos de foliculite bacteriana, com a infeção geralmente causada pela Staphylococcus aureus. Segundo a Sociedade...",
        likes: "5.6k",
        readTime: "2 min",
        date: "08 jul 2025",
      },
      {
        image: "furunculo-artigo-consulta.png",
        tag: "Furúnculo",
        title: "Dicas para aproveitar melhor sua consulta médica",
        description: "Existem algumas doenças que podem se confundir com o furúnculo. Por isso, preparamos um guia...",
        likes: "5.6k",
        readTime: "2 min",
        date: "27 mai 2025",
      },
      {
        image: "furunculo-artigo-tipos.png",
        tag: "Furúnculo",
        title: "Existem diferentes tipos de furúnculo?",
        description: "Os furúnculos são uma infecção cutânea e se enquadram na categoria das foliculites. A infecção é causada, geralmente, pela Staphylococcus aureus...",
        likes: "5.6k",
        readTime: "2 min",
        date: "30 jun 2025",
      },
    ],
    "hidradenite-supurativa": [
      {
        image: "hidradenite-supurativa-artigo-convivendo.png",
        tag: "Hidradenite Supurativa",
        title: "Convivendo com a hidradenite supurativa (HS)",
        description: "Viver com uma doença de pele de longa duração (crônica), como a HS, pode afetar a saúde física...",
        likes: "5.6k",
        readTime: "2 min",
        date: "08 jul 2025",
      },
      {
        image: "hidradenite-supurativa-artigo-sintomas.png",
        tag: "Hidradenite Supurativa",
        title: "Quais são os sintomas da hidradenite supurativa (HS)?",
        description: "Quais são os sintomas da hidradenite supurativa (HS)? A hidradenite supurativa (HS) é caracterizada...",
        likes: "5.6k",
        readTime: "2 min",
        date: "27 mai 2025",
      },
      {
        image: "hidradenite-supurativa-artigo-tratamento.png",
        tag: "Hidradenite Supurativa",
        title: "Tratamento da hidradenite supurativa (HS)",
        description: "Os tratamentos atuais para hidradenite supurativa (HS) são baseados em três pilares...",
        likes: "5.6k",
        readTime: "2 min",
        date: "30 jun 2025",
      },
    ],
    hpn: [
      {
        image: "hpn-artigo-fadiga.png",
        tag: "HPN",
        title: "Monitorando a fadiga causada pela HPN: como avaliar e melhorar a qualidade de...",
        description: "A fadiga é um dos sintomas mais comuns e importantes para pessoas com Hemoglobinúria...",
        likes: "5.6k",
        readTime: "2:00",
        date: "08 jul 2025",
      },
      {
        image: "hpn-artigo-qualidade.png",
        tag: "HPN",
        title: "Como a Hemólise e a HPN Afetam sua Qualidade de Vida",
        description: "A hemoglobinúria paroxística noturna (HPN) é uma doença complexa e desafiadora, que exige uma...",
        likes: "5.6k",
        readTime: "2:00",
        date: "27 mai 2025",
      },
      {
        image: "hpn-artigo-efeitos.png",
        tag: "HPN",
        title: "Compreendendo a HPN e Seus Efeitos",
        description: "A hemoglobinúria paroxística noturna (HPN) é uma doença ultrarrara que afeta o sangue e pode impactar diretamente a qualidade de vida de quem convive...",
        likes: "5.6k",
        readTime: "2:00",
        date: "30 jun 2025",
      },
    ],
    infarto: [
      {
        image: "infarto-artigo-colesterol-ideal.png",
        imageCaption: "Imagem meramente ilustrativa.",
        tag: "Colesterol Alto",
        title: "O nível de colesterol ideal para pessoas de risco muito alto",
        description: "Se você já teve AVC ou infarto, o seu nível de LDL precisa se manter abaixo de 50 mg/dL. É comum...",
        likes: "5.6k",
        readTime: "2 min",
        date: "08 jul 2025",
      },
      {
        image: "infarto-artigo-hipercolesterolemia.png",
        imageCaption: "Imagem meramente ilustrativa.",
        tag: "Colesterol Alto",
        title: "Convivendo com a hipercolesterolemia",
        description: "Se o seu exame de sangue apontou que as taxas de colesterol ruim (LDL) estão altas, é muito importante seguir o tratamento prescrito pelo médico e...",
        likes: "5.6k",
        readTime: "2 min",
        date: "30 jun 2025",
      },
      {
        image: "infarto-artigo-equipe-tratamento.png",
        imageCaption: "Imagem meramente ilustrativa.",
        tag: "Colesterol Alto",
        title: "Colesterol alto: Equipe de tratamento",
        description: "Lidar com dislipidemias, como a hipercolesterolemia, requer colaboração multidisciplinar, incluindo especialistas como cardiologistas...",
        likes: "5.6k",
        readTime: "2 min",
        date: "27 mai 2025",
      },
    ],
    lmc: [
      {
        image: "lmc-artigo-conscientizacao.png",
        tag: "LMC",
        title: "Setembro: Mês da Conscientização das Doenças do Sangue",
        description: "Setembro marca o Mês da Conscientização das Doenças do Sangue, um momento importante para...",
        likes: "5.6k",
        readTime: "2 min",
        date: "08 jul 2025",
      },
      {
        image: "lmc-artigo-tratamentos.png",
        tag: "LMC",
        title: "Tratamentos disponíveis para a Leucemia Mieloide Crônica",
        description: "A Leucemia Mieloide Crônica (LMC) é um tipo de câncer do sangue que que possui tratamento e...",
        likes: "5.6k",
        readTime: "2 min",
        date: "27 mai 2025",
      },
      {
        image: "lmc-artigo-qualidade-vida.png",
        tag: "LMC",
        title: "Melhorando a qualidade de vida de pacientes com doenças do sangue",
        description: "Conviver com uma doença hematológica, como leucemia, linfoma ou mieloma múltiplo, pode ser...",
        likes: "5.6k",
        readTime: "2 min",
        date: "30 jun 2025",
      },
    ],
    mielofibrose: [
      {
        image: "mielofibrose-artigo-o-que-e.png",
        tag: "Mielofibrose",
        title: "O que é mielofibrose?",
        description: "A mielofibrose é um tipo de câncer no sangue, mais comum em pessoas acima dos 50 anos, no qual a medula óssea, o tecido macio e esponjoso dentro...",
        likes: "5.6k",
        readTime: "2 min",
        date: "08 jul 2025",
      },
      {
        image: "mielofibrose-artigo-sintomas.png",
        tag: "Mielofibrose",
        title: "Quais são os sinais e sintomas da mielofibrose?",
        description: "Os sintomas mais comuns da mielofibrose são fraqueza grave (consequência da anemia) e baço...",
        likes: "5.6k",
        readTime: "2 min",
        date: "30 jun 2025",
      },
      {
        image: "mielofibrose-artigo-diagnostico.png",
        tag: "Mielofibrose",
        title: "Como é feito o diagnóstico da mielofibrose?",
        description: "O diagnóstico da mielofibrose não é uma etapa fácil, uma vez que em estágios iniciais o paciente não...",
        likes: "5.6k",
        readTime: "2 min",
        date: "27 mai 2025",
      },
    ],
    psoriase: [
      {
        image: "psoriase-artigo-progressao.png",
        tag: "Psoríase",
        title: "Psoríase além da pele: como ela pode evoluir para Artrite Psoriásica",
        description: "A Psoríase é uma doença inflamatória crônica da pele, de origem autoimune, que causa placas...",
        likes: "5.6k",
        readTime: "2 min",
        date: "08 jul 2025",
      },
      {
        image: "psoriase-artigo-palmoplantar.png",
        tag: "Psoríase",
        title: "Psoríase palmoplantar: o que é e como é possível controlar?",
        description: "A psoríase pode ocorrer em diferentes partes do corpo e se manifestar de várias maneiras...",
        likes: "5.6k",
        readTime: "2 min",
        date: "27 mai 2025",
      },
      {
        image: "psoriase-artigo-etapas.png",
        tag: "Psoríase",
        title: "As principais etapas da psoríase",
        description: "Às vezes problemas de pele surgem sem motivo. Você está lá, imerso em sua vida diária, quando uma mancha vermelha desagradável começa a se...",
        likes: "5.6k",
        readTime: "2 min",
        date: "30 jun 2025",
      },
    ],
    "urticaria-uce": [
      {
        image: "urticaria-uce-artigo-1.png",
        tag: "UCE",
        title: "Conheça as diferenças entre alergia e UCE (Urticária Crônica Espontânea)",
        description: "Você tem amigos ou familiares que têm alergia ao pólen? Talvez alguém que você conheça seja...",
        likes: "5.6k",
        readTime: "2 min",
        date: "08 jul 2025",
      },
      {
        image: "urticaria-uce-artigo-2.png",
        tag: "UCE",
        title: "UCE: diretriz mundial estabelece o tratamento correto para o controle...",
        description: "Nada como o avanço da medicina e das pesquisas para trazer novas perspectivas de qualidade de...",
        likes: "5.6k",
        readTime: "2 min",
        date: "27 mai 2025",
      },
      {
        image: "urticaria-uce-artigo-3.png",
        tag: "UCE",
        title: "Entendendo os sintomas da UCE: por que tenho tanta coceira?",
        description: "Não se coçar quando uma crise de Urticária Crônica Espontânea (UCE) começa parece simplesmente...",
        likes: "5.6k",
        readTime: "2 min",
        date: "30 jun 2025",
      },
    ],
    "artrite-psoriasica": [
      {
        image: "artrite-psoriasica-artigo-tipos.png",
        tag: "Artrite Psoriásica",
        title: "Quais são os tipos de artrite psoriásica?",
        description: "A artrite psoriásica se manifesta de diferentes maneiras, e cada tipo tem características próprias...",
        likes: "5.6k",
        readTime: "2 min",
        date: "08 jul 2025",
      },
      {
        image: "artrite-psoriasica-artigo-cuidados.png",
        tag: "Artrite Psoriásica",
        title: "Cuidados e sintomas da artrite psoriásica",
        description: "Problemas de saúde como a artrite psoriásica podem ser cansativos para a mente e o corpo...",
        likes: "5.6k",
        readTime: "2 min",
        date: "30 jun 2025",
      },
      {
        image: "artrite-psoriasica-artigo-sexo.png",
        tag: "Artrite Psoriásica",
        title: "Sexo e artrite psoriásica: como abordar o assunto com seu parceiro",
        description: "Conciliar a vida sexual com uma doença crônica como a artrite psoriásica (AP) pode ser...",
        likes: "5.6k",
        readTime: "2 min",
        date: "27 mai 2025",
      },
    ],
  };

  function render() {
    document.querySelectorAll("[data-related-articles]").forEach(function (grid) {
      var slug = grid.getAttribute("data-related-articles");
      var items = RELATED_ARTICLES[slug];
      if (!items) return;

      items.forEach(function (item) {
        var card = document.createElement("a");
        card.href = "/pages/artigo.html";
        card.className = "related-article-card";

        var imageWrap = document.createElement("div");
        imageWrap.className = "related-article-card__image";
        var img = document.createElement("img");
        img.src = "/assets/images/" + item.image;
        imageWrap.appendChild(img);
        if (item.imageCaption) {
          var caption = document.createElement("span");
          caption.className = "related-article-card__image-caption";
          caption.textContent = item.imageCaption;
          imageWrap.appendChild(caption);
        }

        var body = document.createElement("div");
        body.className = "related-article-card__body";
        body.innerHTML =
          "<span class=\"tag tag--light\">" + item.tag + "</span>" +
          "<h3>" + item.title + "</h3>" +
          "<p>" + item.description + "</p>" +
          "<div class=\"related-article-card__meta\">" +
          "<span><img src=\"/assets/icons/icon-like.svg\">" + item.likes + "</span>" +
          "<span><img src=\"/assets/icons/icon-timer.svg\">" + item.readTime + "</span>" +
          "<span><img src=\"/assets/icons/icon-calendar.svg\">" + item.date + "</span>" +
          "</div>";

        card.appendChild(imageWrap);
        card.appendChild(body);
        grid.appendChild(card);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", render);
})();

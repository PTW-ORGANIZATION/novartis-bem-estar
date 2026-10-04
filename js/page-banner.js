(function () {
  var ROOT_PREFIX = location.pathname.indexOf("/pages/") !== -1 ? "../" : "";
  var PAGE_BANNERS = {
    campanhas: {
      image: "campaigns-banner.png",
      title: "Pai carregando criança aos ombros sob o céu azul",
      alt: "Um homem de cabelo grisalho carrega uma criança aos ombros, que veste um gorro cor-de-rosa e camisola clara, tendo como fundo um céu azul limpo e árvores.",
      heading: "Campanhas",
      description: "Explore as campanhas disponíveis, aprenda mais sobre as condições e consulte os materiais de suporte ao paciente.",
    },
    medicamentos: {
      image: "medicamentos-banner.png",
      title: "Farmacêutica procurando medicamento numa farmácia",
      alt: "Uma farmacêutica com cabelo escuro e óculos, vestida com bata branca, estica o braço para pegar um produto numa prateleira de uma farmácia, enquanto um cliente sênior com boné observa atentamente enquanto segura uma receita médica.",
      heading: "Medicamentos participantes",
      description: "Medicamentos participantes do Programa Bem Estar. Consulte se seu medicamento participa do Programa e junte-se à nós.",
    },
    faq: {
      image: "faq-banner.png",
      title: "Pessoa escrevendo anotações num caderno com caneta",
      alt: "Close-up de uma mão escrevendo com uma caneta cinza num caderno de páginas brancas.",
      heading: "FAQ - Perguntas Frequentes",
      description: "Confira respostas para as perguntas mais frequentes sobre o Programa Bem Estar e outros temas relacionados.",
    },
    "hub-especialidades": {
      image: "hub-especialidades-banner.png",
      title: "Mulher a sorrir durante conversa e pausa para café no escritório",
      alt: "Uma mulher sorri alegremente enquanto segura uma chávena de café, sentada numa poltrona num escritório luminoso. Em primeiro plano, vê-se a parte traseira de um homem vestindo uma camisa verde-clara, que segura um copo de café.",
      heading: "Especialidades",
      description: "Explore informações sobre diferentes especialidades, prevenção e cuidados com a saúde.",
    },
    cardiologia: {
      image: "specialty-cardiologia.png",
      title: "Casal idoso abraçado e sorrindo ao ar livre",
      alt: "Homem e mulher sêniores abraçados e rindo em uma área arborizada ao pôr do sol.",
      heading: "Cardiologia",
      description: "Conheça a especialidade médica dedicada à saúde do <strong>coração</strong> e do <strong>sistema cardiovascular</strong>.",
    },
    dermatologia: {
      image: "specialty-dermatologia.png",
      title: "Homem sorridente em área externa",
      alt: "Homem de cabelo afro sorrindo para a câmera em uma área externa, com outra pessoa ao fundo.",
      heading: "Dermatologia",
      description: "Conheça a especialidade médica dedicada à saúde da <strong>pele</strong>, <strong>cabelo</strong>s e <strong>unhas</strong>.",
    },
    hematologia: {
      image: "specialty-hematologia.png",
      title: "Casal brindando com bebidas em dia ensolarado na praia",
      alt: "Homem de dreadlocks e mulher sorridente sentados na areia da praia, brindando com garrafas de bebida sob a luz do sol.",
      heading: "Hematologia",
      description: "Conheça a especialidade médica dedicada à saúde do <strong>sangue</strong> e dos <strong>órgãos hematopoéticos</strong>.",
    },
    nefrologia: {
      image: "specialty-nefrologia.png",
      title: "Família reunida sorrindo no sofá de casa",
      alt: "Avô, mãe e garotinho sentados juntos em um sofá na sala de estar, interagindo alegremente.",
      heading: "Nefrologia",
      description: "Conheça a especialidade médica dedicada à saúde dos <strong>rins</strong> e do <strong>sistema urinário</strong>.",
    },
    neurologia: {
      image: "specialty-neurologia.png",
      title: "Avó segurando bebê ao ar livre",
      alt: "Mulher idosa segurando um bebê no ar com carinho no jardim em frente a uma casa.",
      heading: "Neurologia",
      description: "Conheça a especialidade médica dedicada à saúde do <strong>cérebro</strong>, da <strong>medula espinhal</strong> e dos <strong>nervos</strong>.",
    },
    oncologia: {
      image: "specialty-oncologia.png",
      title: "Prática de yoga ao ar livre em grupo",
      alt: "Mulher de camiseta roxa com os braços abertos olhando para cima durante aula de yoga ao ar livre.",
      heading: "Oncologia",
      description: "Conheça a especialidade médica dedicada à prevenção, diagnóstico e tratamento do <strong>câncer</strong>.",
    },
    pneumologia: {
      image: "specialty-pneumologia.png",
      title: "Mãe carregando filho pequeno nas costas perto da janela",
      alt: "Mulher sorridente carregando garotinho nas costas em um ambiente interno iluminado por luz natural.",
      heading: "Pneumologia",
      description: "Conheça a especialidade médica dedicada à saúde dos <strong>pulmões</strong> e do <strong>sistema respiratório</strong>.",
    },
    reumatologia: {
      image: "specialty-reumatologia.png",
      title: "Homem sorridente de capacete andando de bicicleta",
      alt: "Homem de capacete e camiseta azul sorrindo enquanto anda de bicicleta em uma via arborizada.",
      heading: "Reumatologia",
      description: "Conheça a especialidade médica dedicada à saúde das <strong>articulações</strong>, <strong>músculos</strong>, <strong>ossos</strong> e <strong>tecidos conjuntivos</strong>.",
    },
    "fale-conosco": {
      image: "fale-conosco-banner.jpg",
      title: "Empatia em ambiente clínico: profissional de saúde a apoiar paciente",
      alt: "Um profissional de saúde vestindo uma bata branca segura com carinho a mão de um paciente num consultório médico, demonstrando apoio e empatia, com um ecrã azul ao fundo.",
      heading: "Fale conosco",
    },
  };

  function render() {
    document.querySelectorAll("[data-page-banner]").forEach(function (placeholder) {
      var slug = placeholder.getAttribute("data-page-banner");
      var data = PAGE_BANNERS[slug];
      if (!data) return;

      var wrapper = document.createElement("div");
      wrapper.className = slug + "-banner page-banner";

      var img = document.createElement("img");
      img.src = ROOT_PREFIX + "assets/images/" + data.image;
      img.className = slug + "-banner__image page-banner__image";
      if (data.title) img.title = data.title;
      if (data.alt) img.alt = data.alt;

      var content = document.createElement("div");
      content.className = slug + "-banner__content page-banner__content";
      content.innerHTML = "<h1>" + data.heading + "</h1>" + (data.description ? "<p>" + data.description + "</p>" : "");

      wrapper.appendChild(img);
      wrapper.appendChild(content);
      placeholder.replaceWith(wrapper);
    });
  }

  document.addEventListener("DOMContentLoaded", render);
})();

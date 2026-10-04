window.SEARCH_INDEX = [
  { type: 'Condição', title: 'Atrofia Muscular Espinhal (AME)', href: '/pages/ame.html' },
  { type: 'Condição', title: 'Artrite Psoriásica', href: '/pages/artrite-psoriasica.html' },
  { type: 'Condição', title: 'Asma Grave', href: '/pages/asma-grave.html' },
  { type: 'Condição', title: 'Câncer de Mama', href: '/pages/cancer-de-mama.html' },
  { type: 'Condição', title: 'Câncer de Próstata', href: '/pages/cancer-de-prostata.html' },
  { type: 'Condição', title: 'Colesterol Alto', href: '/pages/colesterol-alto.html' },
  { type: 'Condição', title: 'Dor nas Costas', href: '/pages/dor-nas-costas.html' },
  { type: 'Condição', title: 'Esclerose Múltipla', href: '/pages/esclerose-multipla.html' },
  { type: 'Condição', title: 'Furúnculo', href: '/pages/furunculo.html' },
  { type: 'Condição', title: 'Hemoglobinúria Paroxística Noturna (HPN)', href: '/pages/hpn.html' },
  { type: 'Condição', title: 'Hidradenite Supurativa', href: '/pages/hidradenite-supurativa.html' },
  { type: 'Condição', title: 'Infarto', href: '/pages/infarto.html' },
  { type: 'Condição', title: 'Leucemia Mieloide Crônica (LMC)', href: '/pages/lmc.html' },
  { type: 'Condição', title: 'Mielofibrose', href: '/pages/mielofibrose.html' },
  { type: 'Condição', title: 'Psoríase', href: '/pages/psoriase.html' },
  { type: 'Condição', title: 'Urticária Crônica Espontânea (UCE)', href: '/pages/urticaria-uce.html' },

  { type: 'Especialidade', title: 'Cardiologia', href: '/pages/cardiologia.html' },
  { type: 'Especialidade', title: 'Dermatologia', href: '/pages/dermatologia.html' },
  { type: 'Especialidade', title: 'Hematologia', href: '/pages/hematologia.html' },
  { type: 'Especialidade', title: 'Nefrologia', href: '/pages/nefrologia.html' },
  { type: 'Especialidade', title: 'Neurologia', href: '/pages/neurologia.html' },
  { type: 'Especialidade', title: 'Oncologia', href: '/pages/oncologia.html' },
  { type: 'Especialidade', title: 'Pneumologia', href: '/pages/pneumologia.html' },
  { type: 'Especialidade', title: 'Reumatologia', href: '/pages/reumatologia.html' },
  { type: 'Especialidade', title: 'Todas as especialidades', href: '/pages/hub-especialidades.html' },

  { type: 'Página', title: 'Programa Bem Estar', href: '/pages/programa-bem-estar.html' },
  { type: 'Página', title: 'Campanhas', href: '/pages/campanhas.html' },
  { type: 'Página', title: 'Blog', href: '/pages/blog.html' },
  { type: 'Página', title: 'Fale Conosco', href: '/pages/fale-conosco.html' },
  { type: 'Página', title: 'FAQ', href: '/pages/faq.html' },
  { type: 'Página', title: 'Medicamentos Participantes', href: '/pages/medicamentos.html' },
  { type: 'Página', title: 'Área Médica', href: '/pages/area-medica.html' },
  { type: 'Página', title: 'Área Parceiros', href: '/pages/area-parceiros.html' },
  { type: 'Página', title: 'Regulamento', href: '/pages/regulamento.html' }
];

window.searchUtils = {
  normalize: function (str) {
    return (str || '')
      .toString()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .toLowerCase()
      .trim();
  },

  escapeHtml: function (str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  },

  highlight: function (text, query) {
    var escapeHtml = window.searchUtils.escapeHtml;
    var normalize = window.searchUtils.normalize;
    if (!query) return escapeHtml(text);
    var normText = normalize(text);
    var normQuery = normalize(query);
    var idx = normText.indexOf(normQuery);
    if (idx === -1) return escapeHtml(text);

    var before = text.slice(0, idx);
    var match = text.slice(idx, idx + query.length);
    var after = text.slice(idx + query.length);
    return escapeHtml(before) + '<strong>' + escapeHtml(match) + '</strong>' + escapeHtml(after);
  },

  search: function (query, limit) {
    var normalize = window.searchUtils.normalize;
    var normQuery = normalize(query);
    if (!normQuery) return [];

    var starts = [];
    var contains = [];

    window.SEARCH_INDEX.forEach(function (item) {
      var normTitle = normalize(item.title);
      if (normTitle.indexOf(normQuery) === 0) {
        starts.push(item);
      } else if (normalize(item.type + ' ' + item.title).indexOf(normQuery) !== -1) {
        contains.push(item);
      }
    });

    var results = starts.concat(contains);
    return typeof limit === 'number' ? results.slice(0, limit) : results;
  }
};

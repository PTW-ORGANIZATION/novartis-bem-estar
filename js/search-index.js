var SEARCH_INDEX_ROOT_PREFIX = location.pathname.indexOf('/pages/') !== -1 ? '../' : '';
window.SEARCH_INDEX = [
  { type: 'Condição', title: 'Atrofia Muscular Espinhal (AME)', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/ame.html' },
  { type: 'Condição', title: 'Artrite Psoriásica', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/artrite-psoriasica.html' },
  { type: 'Condição', title: 'Asma Grave', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/asma-grave.html' },
  { type: 'Condição', title: 'Câncer de Mama', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/cancer-de-mama.html' },
  { type: 'Condição', title: 'Câncer de Próstata', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/cancer-de-prostata.html' },
  { type: 'Condição', title: 'Colesterol Alto', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/colesterol-alto.html' },
  { type: 'Condição', title: 'Dor nas Costas', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/dor-nas-costas.html' },
  { type: 'Condição', title: 'Esclerose Múltipla', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/esclerose-multipla.html' },
  { type: 'Condição', title: 'Furúnculo', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/furunculo.html' },
  { type: 'Condição', title: 'Hemoglobinúria Paroxística Noturna (HPN)', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/hpn.html' },
  { type: 'Condição', title: 'Hidradenite Supurativa', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/hidradenite-supurativa.html' },
  { type: 'Condição', title: 'Infarto', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/infarto.html' },
  { type: 'Condição', title: 'Leucemia Mieloide Crônica (LMC)', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/lmc.html' },
  { type: 'Condição', title: 'Mielofibrose', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/mielofibrose.html' },
  { type: 'Condição', title: 'Psoríase', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/psoriase.html' },
  { type: 'Condição', title: 'Urticária Crônica Espontânea (UCE)', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/urticaria-uce.html' },

  { type: 'Especialidade', title: 'Cardiologia', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/cardiologia.html' },
  { type: 'Especialidade', title: 'Dermatologia', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/dermatologia.html' },
  { type: 'Especialidade', title: 'Hematologia', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/hematologia.html' },
  { type: 'Especialidade', title: 'Nefrologia', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/nefrologia.html' },
  { type: 'Especialidade', title: 'Neurologia', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/neurologia.html' },
  { type: 'Especialidade', title: 'Oncologia', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/oncologia.html' },
  { type: 'Especialidade', title: 'Pneumologia', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/pneumologia.html' },
  { type: 'Especialidade', title: 'Reumatologia', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/reumatologia.html' },
  { type: 'Especialidade', title: 'Todas as especialidades', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/hub-especialidades.html' },

  { type: 'Página', title: 'Programa Bem Estar', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/programa-bem-estar.html' },
  { type: 'Página', title: 'Campanhas', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/campanhas.html' },
  { type: 'Página', title: 'Blog', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/blog.html' },
  { type: 'Página', title: 'Fale Conosco', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/fale-conosco.html' },
  { type: 'Página', title: 'FAQ', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/faq.html' },
  { type: 'Página', title: 'Medicamentos Participantes', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/medicamentos.html' },
  { type: 'Página', title: 'Área Médica', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/area-medica.html' },
  { type: 'Página', title: 'Área Parceiros', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/area-parceiros.html' },
  { type: 'Página', title: 'Regulamento', href: SEARCH_INDEX_ROOT_PREFIX + 'pages/regulamento.html' }
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

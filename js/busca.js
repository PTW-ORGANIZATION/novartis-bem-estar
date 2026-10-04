(function () {
  var normalize = window.searchUtils.normalize;
  var highlight = window.searchUtils.highlight;

  function pluralize(n) {
    return n === 1 ? 'resultado compatível' : 'resultados compatíveis';
  }

  function renderResults(container, results, query) {
    container.innerHTML = '';
    results.forEach(function (item) {
      var el = document.createElement('a');
      el.className = 'search-result';
      el.href = item.href;

      var label = document.createElement('span');
      label.className = 'search-result__label';
      label.textContent = item.type;

      var title = document.createElement('p');
      title.className = 'search-result__title';
      title.innerHTML = highlight(item.title, query);

      el.appendChild(label);
      el.appendChild(title);
      container.appendChild(el);
    });
  }

  function init() {
    var params = new URLSearchParams(window.location.search);
    var query = (params.get('q') || '').trim();

    var recapInput = document.querySelector('[data-search-recap-input]');
    var titleEl = document.querySelector('[data-search-title]');
    var countEl = document.querySelector('[data-search-count]');
    var resultsEl = document.querySelector('[data-search-results]');
    var emptyEl = document.querySelector('[data-search-empty]');
    var emptyDescriptionEl = document.querySelector('[data-search-empty-description]');

    if (!titleEl || !resultsEl || !emptyEl) return;

    if (recapInput) recapInput.value = query;

    var results;
    if (!query) {
      results = window.SEARCH_INDEX;
      titleEl.textContent = 'Resultados de pesquisa';
    } else {
      var normQuery = normalize(query);
      results = window.SEARCH_INDEX.filter(function (item) {
        return normalize(item.type + ' ' + item.title).indexOf(normQuery) !== -1;
      });
      titleEl.innerHTML = 'Resultados de pesquisa para “' + highlight(query, query) + '”.';
    }

    if (countEl) {
      countEl.textContent = results.length + ' ' + pluralize(results.length);
    }

    if (results.length === 0) {
      resultsEl.hidden = true;
      emptyEl.hidden = false;
      if (emptyDescriptionEl) {
        emptyDescriptionEl.textContent = query
          ? 'Não encontramos nenhum resultado para a sua busca por “' + query + '”.'
          : 'Não encontramos nenhum resultado para a sua busca.';
      }
    } else {
      emptyEl.hidden = true;
      resultsEl.hidden = false;
      renderResults(resultsEl, results, query);
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();

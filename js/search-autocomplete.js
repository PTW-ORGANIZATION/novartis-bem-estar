(function () {
  var MAX_SUGGESTIONS = 6;

  function setup(input) {
    var wrapper = input.closest('[data-search-wrapper]');
    var panel = wrapper ? wrapper.querySelector('[data-search-suggestions]') : null;
    if (!panel) return;

    var activeIndex = -1;

    function render(items, query) {
      panel.innerHTML = '';
      activeIndex = -1;

      if (!items.length) {
        panel.classList.remove('is-open');
        return;
      }

      items.forEach(function (item) {
        var a = document.createElement('a');
        a.href = '/pages/busca.html?q=' + encodeURIComponent(item.title);
        a.className = 'search-suggestions__item';

        var type = document.createElement('span');
        type.className = 'search-suggestions__type';
        type.textContent = item.type;

        var title = document.createElement('span');
        title.className = 'search-suggestions__title';
        title.innerHTML = window.searchUtils.highlight(item.title, query);

        a.appendChild(type);
        a.appendChild(title);
        a.addEventListener('mousedown', function () {
          input.value = item.title;
        });
        panel.appendChild(a);
      });

      panel.classList.add('is-open');
    }

    function update() {
      var query = input.value.trim();
      if (!query) {
        panel.classList.remove('is-open');
        panel.innerHTML = '';
        return;
      }
      render(window.searchUtils.search(query, MAX_SUGGESTIONS), query);
    }

    function close() {
      panel.classList.remove('is-open');
    }

    function moveActive(delta) {
      var items = panel.querySelectorAll('.search-suggestions__item');
      if (!items.length) return;
      activeIndex = (activeIndex + delta + items.length) % items.length;
      items.forEach(function (el, i) {
        el.classList.toggle('is-active', i === activeIndex);
      });
      items[activeIndex].scrollIntoView({ block: 'nearest' });
    }

    input.addEventListener('input', update);

    input.addEventListener('keydown', function (e) {
      var items = panel.querySelectorAll('.search-suggestions__item');
      if (!panel.classList.contains('is-open') || !items.length) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        moveActive(1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        moveActive(-1);
      } else if (e.key === 'Enter' && activeIndex !== -1) {
        e.preventDefault();
        window.location.href = items[activeIndex].getAttribute('href');
      } else if (e.key === 'Escape') {
        close();
      }
    });

    input.addEventListener('blur', function () {
      setTimeout(close, 150);
    });

    input.addEventListener('focus', function () {
      if (input.value.trim()) update();
    });
  }

  window.initSearchAutocomplete = function () {
    document.querySelectorAll('[data-search-input]').forEach(setup);
  };
})();

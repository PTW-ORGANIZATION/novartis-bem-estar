document.addEventListener('DOMContentLoaded', function () {
  var ROOT_PREFIX = location.pathname.indexOf('/pages/') !== -1 ? '../' : '';
  var sidebarRelatedList = document.querySelector('[data-sidebar-related]');
  if (sidebarRelatedList) {
    var SIDEBAR_RELATED_CARD = {
      tag: 'Câncer de Mama',
      title: 'Lisi etiam dignissim diam quis velit dignissim',
      likes: '5.6k',
      readTime: '2:00',
      days: '10 dias',
    };
    for (var i = 0; i < 4; i++) {
      var card = document.createElement('a');
      card.href = ROOT_PREFIX + 'pages/artigo.html';
      card.className = 'artigo-related-card';
      card.innerHTML =
        '<div class="artigo-related-card__image"></div>' +
        '<div class="artigo-related-card__body">' +
        '<span class="tag tag--dark">' + SIDEBAR_RELATED_CARD.tag + '</span>' +
        '<h3>' + SIDEBAR_RELATED_CARD.title + '</h3>' +
        '<div class="artigo-related-card__meta">' +
        '<span><img src="' + ROOT_PREFIX + 'assets/icons/icon-like.svg" alt="">' + SIDEBAR_RELATED_CARD.likes + '</span>' +
        '<span><img src="' + ROOT_PREFIX + 'assets/icons/icon-timer.svg" alt="">' + SIDEBAR_RELATED_CARD.readTime + '</span>' +
        '<span><img src="' + ROOT_PREFIX + 'assets/icons/icon-calendar.svg" alt="">' + SIDEBAR_RELATED_CARD.days + '</span>' +
        '</div>' +
        '</div>';
      sidebarRelatedList.appendChild(card);
    }
  }

  var shareBtn = document.querySelector('[data-share]');
  var shareModal = document.querySelector('[data-share-modal]');
  if (shareBtn && shareModal) {
    var shareUrlLink = shareModal.querySelector('[data-share-url-link]');
    var shareUrlRow = shareModal.querySelector('.share-modal__url');
    var shareCopyBtn = shareModal.querySelector('[data-share-copy]');
    var shareCopyLabel = shareModal.querySelector('[data-share-copy-label]');
    var shareCloseEls = shareModal.querySelectorAll('[data-share-close]');
    var copiedTimeout = null;

    var SHARE_NETWORKS = {
      whatsapp: function (url, title) { return 'https://wa.me/?text=' + encodeURIComponent(title + ' ' + url); },
      telegram: function (url, title) { return 'https://t.me/share/url?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(title); },
      facebook: function (url) { return 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url); },
      linkedin: function (url) { return 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(url); },
      instagram: function () { return 'https://www.instagram.com/'; },
      x: function (url, title) { return 'https://x.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(title); },
    };

    function openShareModal() {
      var url = window.location.href;
      shareUrlLink.href = url;
      shareUrlLink.textContent = url;
      shareModal.querySelectorAll('[data-share-network]').forEach(function (link) {
        var network = link.getAttribute('data-share-network');
        if (SHARE_NETWORKS[network]) {
          link.href = SHARE_NETWORKS[network](url, document.title);
        }
      });
      shareModal.classList.add('is-open');
    }

    function closeShareModal() {
      shareModal.classList.remove('is-open');
      shareModal.classList.remove('is-copied');
      shareUrlRow.classList.remove('is-copied');
      if (copiedTimeout) { clearTimeout(copiedTimeout); copiedTimeout = null; }
      shareCopyLabel.textContent = 'Copiar link';
    }

    shareBtn.addEventListener('click', openShareModal);
    shareCloseEls.forEach(function (el) { el.addEventListener('click', closeShareModal); });

    shareCopyBtn.addEventListener('click', function () {
      var url = window.location.href;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).catch(function () {});
      }
      shareModal.classList.add('is-copied');
      shareUrlRow.classList.add('is-copied');
      shareCopyLabel.textContent = 'Link copiado!';
      if (copiedTimeout) { clearTimeout(copiedTimeout); }
      copiedTimeout = setTimeout(function () {
        shareModal.classList.remove('is-copied');
        shareUrlRow.classList.remove('is-copied');
        shareCopyLabel.textContent = 'Copiar link';
      }, 2500);
    });
  }

  var feedbackContainer = document.querySelector('[data-feedback-buttons]');
  if (feedbackContainer) {
    var FEEDBACK_ICONS = {
      up: {
        active: ROOT_PREFIX + 'assets/icons/feedback-thumbs-up-active.svg',
        inactive: ROOT_PREFIX + 'assets/icons/feedback-thumbs-up-inactive.svg',
        default: ROOT_PREFIX + 'assets/icons/feedback-thumbs-up-default.svg',
      },
      down: {
        active: ROOT_PREFIX + 'assets/icons/feedback-thumbs-down-active.svg',
        inactive: ROOT_PREFIX + 'assets/icons/feedback-thumbs-down-inactive.svg',
        default: ROOT_PREFIX + 'assets/icons/feedback-thumbs-down-default.svg',
      },
    };
    var upImg = feedbackContainer.querySelector('[data-feedback="up"] img');
    var downImg = feedbackContainer.querySelector('[data-feedback="down"] img');

    feedbackContainer.querySelectorAll('[data-feedback]').forEach(function (button) {
      button.addEventListener('click', function () {
        var choice = button.getAttribute('data-feedback');
        var current = feedbackContainer.getAttribute('data-feedback-state');
        if (current === choice) {
          feedbackContainer.removeAttribute('data-feedback-state');
          upImg.src = FEEDBACK_ICONS.up.default;
          downImg.src = FEEDBACK_ICONS.down.default;
          return;
        }
        feedbackContainer.setAttribute('data-feedback-state', choice);
        if (choice === 'up') {
          upImg.src = FEEDBACK_ICONS.up.active;
          downImg.src = FEEDBACK_ICONS.down.inactive;
        } else {
          upImg.src = FEEDBACK_ICONS.up.inactive;
          downImg.src = FEEDBACK_ICONS.down.active;
        }
      });
    });
  }
});

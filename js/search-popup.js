(function () {
  function init() {
    var popup = document.querySelector("[data-search-popup]");
    var navWrapper = document.querySelector(".navbar__search");
    var navInput = navWrapper ? navWrapper.querySelector("[data-search-input]") : null;
    if (!popup || !navInput) return;

    var popupInput = popup.querySelector("[data-search-input]");
    var panel = popup.querySelector(".search-popup__panel");

    function computeMorph(fromRect, toRect) {
      if (!fromRect.width || !fromRect.height) return null;
      var scale = Math.max(0.05, Math.min(1, fromRect.width / toRect.width));
      var fromCenterX = fromRect.left + fromRect.width / 2;
      var fromCenterY = fromRect.top + fromRect.height / 2;
      var toCenterX = toRect.left + toRect.width / 2;
      var toCenterY = toRect.top + toRect.height / 2;
      return { x: fromCenterX - toCenterX, y: fromCenterY - toCenterY, scale: scale };
    }

    function morphTransform(morph) {
      return "translate(" + morph.x + "px, " + morph.y + "px) scale(" + morph.scale + ")";
    }

    function open() {
      if (popup.classList.contains("is-open")) return;

      document.dispatchEvent(new CustomEvent("request-close-nav-menu"));

      panel.style.transform = "";
      var morph = computeMorph(navWrapper.getBoundingClientRect(), panel.getBoundingClientRect());

      if (morph) {
        panel.style.transition = "none";
        panel.style.transform = morphTransform(morph);
        panel.style.opacity = "0";
        void panel.offsetWidth;
        panel.style.transition = "";
        void panel.offsetWidth;
      }

      popup.classList.add("is-open");
      panel.style.transform = "";
      panel.style.opacity = "";

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      if (popupInput) {
        setTimeout(function () {
          popupInput.focus();
        }, 0);
      }
    }

    function close() {
      if (!popup.classList.contains("is-open")) return;

      var morph = computeMorph(navWrapper.getBoundingClientRect(), panel.getBoundingClientRect());
      if (morph) {
        panel.style.transform = morphTransform(morph);
        panel.style.opacity = "0";
      }

      popup.classList.remove("is-open");
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      setTimeout(function () {
        panel.style.transform = "";
        panel.style.opacity = "";
      }, 420);
    }

    navInput.addEventListener("focus", function (event) {
      event.target.blur();
      open();
    });

    navInput.addEventListener("click", open);

    var mobileTrigger = document.querySelector("[data-search-trigger-mobile]");
    if (mobileTrigger) {
      mobileTrigger.addEventListener("click", open);
    }

    popup.querySelectorAll("[data-search-popup-dismiss]").forEach(function (el) {
      el.addEventListener("click", close);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && popup.classList.contains("is-open")) close();
    });

    document.addEventListener("request-close-search", close);
  }

  document.addEventListener("partials:loaded", init);
})();

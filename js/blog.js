document.addEventListener("DOMContentLoaded", () => {
  const filtersEl = document.querySelector("[data-filters]");
  const articlesEl = document.querySelector("[data-articles]");
  if (!filtersEl || !articlesEl) return;

  const chips = filtersEl.querySelectorAll(".filter-chip");
  const cards = articlesEl.querySelectorAll(".article-card");

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");

      const filter = chip.dataset.filter;

      cards.forEach((card) => {
        const show = filter === "todos" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !show);
      });
    });
  });

  const popup = document.querySelector("[data-filter-popup]");
  const popupChipsEl = document.querySelector("[data-filter-popup-chips]");
  const trigger = document.querySelector("[data-filter-trigger]");
  const applyBtn = document.querySelector("[data-filter-apply]");
  const clearBtn = document.querySelector("[data-filter-clear]");

  if (popup && popupChipsEl && trigger) {
    chips.forEach((chip) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "filter-popup__chip" + (chip.dataset.filter === "todos" ? " is-selected" : "");
      btn.dataset.filter = chip.dataset.filter;
      btn.textContent = chip.textContent;
      popupChipsEl.appendChild(btn);
    });

    const popupChips = popupChipsEl.querySelectorAll(".filter-popup__chip");

    function openPopup() {
      popup.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }

    function closePopup() {
      popup.classList.remove("is-open");
      document.body.style.overflow = "";
    }

    trigger.addEventListener("click", openPopup);
    popup.querySelectorAll("[data-filter-popup-dismiss]").forEach((el) => el.addEventListener("click", closePopup));

    popupChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const filter = chip.dataset.filter;
        if (filter === "todos") {
          popupChips.forEach((c) => c.classList.remove("is-selected"));
          chip.classList.add("is-selected");
        } else {
          popupChips[0].classList.remove("is-selected");
          chip.classList.toggle("is-selected");
          const anySelected = Array.from(popupChips)
            .slice(1)
            .some((c) => c.classList.contains("is-selected"));
          if (!anySelected) popupChips[0].classList.add("is-selected");
        }
      });
    });

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        popupChips.forEach((c, i) => c.classList.toggle("is-selected", i === 0));
      });
    }

    if (applyBtn) {
      applyBtn.addEventListener("click", () => {
        const selected = Array.from(popupChips)
          .filter((c) => c.classList.contains("is-selected"))
          .map((c) => c.dataset.filter);
        const showAll = selected.length === 0 || selected.includes("todos");

        cards.forEach((card) => {
          const show = showAll || selected.includes(card.dataset.category);
          card.classList.toggle("is-hidden", !show);
        });

        closePopup();
      });
    }
  }
});

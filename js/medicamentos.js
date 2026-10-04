document.addEventListener("DOMContentLoaded", () => {
  const mobileQuery = window.matchMedia("(max-width: 720px)");

  const image = document.querySelector(".med-cta__image");
  const button = document.querySelector(".med-cta__content .btn");
  if (!image || !button) return;

  const originalParent = image.parentNode;
  const originalNext = image.nextSibling;

  function place() {
    if (mobileQuery.matches) {
      button.insertAdjacentElement("beforebegin", image);
    } else if (originalNext) {
      originalParent.insertBefore(image, originalNext);
    } else {
      originalParent.appendChild(image);
    }
  }

  place();
  mobileQuery.addEventListener("change", place);
});

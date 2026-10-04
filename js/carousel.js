function initSpecialtiesCarousel() {
  const track = document.querySelector("[data-carousel='specialties']");
  if (!track) return;

  const prev = document.querySelector("[data-carousel-prev='specialties']");
  const next = document.querySelector("[data-carousel-next='specialties']");
  const cards = Array.from(track.children);
  if (cards.length < 2) return;

  let index = 0;
  let isJumping = false;

  function maxIndex() {
    return cards.length - 1;
  }

  function scrollToIndex(i, smooth) {
    track.scrollTo({ left: cards[i].offsetLeft, behavior: smooth ? "smooth" : "auto" });
  }

  function goNext() {
    if (isJumping) return;
    if (index >= maxIndex()) {
      index = 0;
      isJumping = true;
      scrollToIndex(index, false);
      setTimeout(() => (isJumping = false), 50);
      return;
    }
    index += 1;
    scrollToIndex(index, true);
  }

  function goPrev() {
    if (isJumping) return;
    if (index <= 0) {
      index = maxIndex();
      isJumping = true;
      scrollToIndex(index, false);
      setTimeout(() => (isJumping = false), 50);
      return;
    }
    index -= 1;
    scrollToIndex(index, true);
  }

  next?.addEventListener("click", goNext);
  prev?.addEventListener("click", goPrev);

  let syncTimer;
  track.addEventListener("scroll", () => {
    if (isJumping) return;
    clearTimeout(syncTimer);
    syncTimer = setTimeout(() => {
      let closest = 0;
      let closestDistance = Infinity;
      cards.forEach((card, i) => {
        const distance = Math.abs(card.offsetLeft - track.scrollLeft);
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = i;
        }
      });
      index = closest;
    }, 120);
  });
}

function initHeroCarousel() {
  const carousel = document.querySelector("[data-hero-carousel]");
  if (!carousel) return;

  const slides = carousel.querySelectorAll(".hero__slide");
  const dots = carousel.querySelectorAll("[data-hero-dot]");
  let current = 0;
  let timer;

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle("is-active", i === current));
    dots.forEach((dot, i) => {
      const isActive = i === current;
      dot.classList.toggle("is-active", isActive);
      const img = dot.querySelector("img");
      if (img) img.src = `/assets/icons/dot-${isActive ? "active" : "inactive"}.svg`;
    });
  }

  function startAutoplay() {
    stopAutoplay();
    timer = setInterval(() => goTo(current + 1), 6000);
  }

  function stopAutoplay() {
    if (timer) clearInterval(timer);
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      goTo(Number(dot.dataset.heroDot));
      startAutoplay();
    });
  });

  carousel.addEventListener("mouseenter", stopAutoplay);
  carousel.addEventListener("mouseleave", startAutoplay);

  if (slides.length > 1) startAutoplay();
}

document.addEventListener("DOMContentLoaded", () => {
  initSpecialtiesCarousel();
  initHeroCarousel();
});

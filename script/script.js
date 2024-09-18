// CSS ein-/ausschalten

//Variable deklarieren
let counter = 0;

//Funktion für den Button
function addCSS() {
  counter++;
  const linkElement = document.getElementById("theme-link");

  // Bei jedem Klick wird der Counter inkrementiert
  // Jeweils abwechselnd wird CSS geladen oder das href ist leer
  if (counter % 2 == 0) {
    linkElement.href = "css/styles.css"; // CSS-Datei
  } else {
    linkElement.href = ""; // leer
  }
}

// Photo-Slider

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

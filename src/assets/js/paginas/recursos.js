// Función que anima los elementos en la página al cargar
const animateWebsiteOnInit = () => {
  // Se espera 500ms para iniciar la animación, para que el DOM termine de cargarse
  let w = setTimeout(() => {
    // Selecciona los elementos <p> en la página y los anima en orden
    let elem = document.querySelectorAll(".recursos");
    if (elem.length > 0) {
      anim(elem, (n) => elem[n].classList.add("show"));
    }
    clearTimeout(w);
  }, 500);
};

document.addEventListener("DOMContentLoaded", () => animateWebsiteOnInit());

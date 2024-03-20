// Función que anima los elementos en la página al cargar
const animateWebsiteOnInit = () => {
  // Se espera 500ms para iniciar la animación, para que el DOM termine de cargarse
  let w = setTimeout(() => {
    // Selecciona los elementos <p> en la página y los anima en orden
    let elem = document.querySelectorAll(".content p");
    if (elem.length > 0) {
      anim(elem, (n) => elem[n].classList.add("show"));
    }
    clearTimeout(w);
  }, 500);
};

const animateH2 = (letter) => {
  let letterContent = letter.textContent;
  let letters = "";
  for (let index = 0; index < letterContent.length; index++) {
    letters += `<span class="letter letter_${letterContent[index]}">${letterContent[index]}</span>`;
  }
  letter.innerHTML = letters;
  // Se espera 500ms para iniciar la animación, para que el DOM termine de cargarse
  let w = setTimeout(() => {
    let spanLetters = document.querySelectorAll(".letter");
    if (spanLetters.length > 0) {
      anim(spanLetters, (n) => spanLetters[n].classList.add("letterColor"));
    }
    clearTimeout(w);
  }, 500);
};

const animateMyFace = () => {
  // Verificamos que exista un elemento con la clase "animated-logo"
  if (_(".animated-logo")) {
    // Agregamos un evento "mousemove" al documento
    document.addEventListener("mousemove", function (e) {
      // Obtenemos la posición del mouse y la ajustamos para obtener un valor entre 0 y 1
      const x = e.pageX / (window.innerWidth * 10),
        y = e.pageY / (window.innerHeight * 10);

      // Verificamos la posición del mouse y modificamos la clase del elemento "animated-logo" en consecuencia
      if (y <= parseFloat(0.03)) {
        if (x >= parseFloat(0.05)) {
          _(".animated-logo").className = "animated-logo go-top-right";
        }
        if (x <= parseFloat(0.05)) {
          _(".animated-logo").className = "animated-logo go-top-left";
        }
      } else if (y >= parseFloat(0.05)) {
        if (x >= parseFloat(0.05)) {
          _(".animated-logo").className = "animated-logo go-down-left";
        }
        if (x <= parseFloat(0.05)) {
          _(".animated-logo").className = "animated-logo go-down-right";
        }
      } else {
        _(".animated-logo").className = "animated-logo";
      }
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  animateWebsiteOnInit();
  animateMyFace();
  animateH2(document.querySelector("h2"));
});
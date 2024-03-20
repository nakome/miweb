const _ = (el) => document.querySelector(el);

// Obtener el tema actual desde localStorage
const currentTheme = localStorage.getItem("theme");

const themeDark = () => {
  // Declaración de una función llamada themeDark
  document.body.setAttribute("data-theme", "dark"); // Establece el atributo "data-theme" del elemento <body> en "dark"
  _(".toogle-theme").innerHTML = "🌚"; // Cambia el contenido del elemento HTML con clase ".toogle-theme" a un emoji de luna (🌚)
};

const themeLight = () => {
  // Declaración de una función llamada themeLight
  document.body.setAttribute("data-theme", "light"); // Establece el atributo "data-theme" del elemento <body> en "light"
  _(".toogle-theme").innerHTML = "🌞"; // Cambia el contenido del elemento HTML con clase ".toogle-theme" a un emoji de sol (🌞)
};

const toogleNavigation = (evt) => {
  // Declaración de una función llamada toogleNavigation, que recibe un parámetro evt
  evt.preventDefault(); // Evita que el evento por defecto se produzca en el objeto evt
  _(".header").classList.toggle("active"); // Agrega o remueve la clase "active" del elemento con clase ".header"
  _(".content").classList.toggle("active"); // Agrega o remueve la clase "active" del elemento con clase ".content"
};

const anim = (
  arr,
  callback // Declaración de una función llamada anim que acepta dos parámetros: un array llamado "arr" y una función llamada "callback"
) =>
  (function show(n) {
    // Declaración de una función autoinvocada llamada "show" que acepta un parámetro "n" que se establece inicialmente en 0
    setTimeout(() => {
      // Se establece un temporizador que llama a una función después de un retraso de 50 milisegundos
      n++; // Se incrementa "n" en uno
      if (arr.length > n) show(n); // Si "n" es menor que la longitud del array "arr", se llama a la función "show" con el valor actual de "n"
      return callback(n - 1); // Se llama a la función "callback" con el elemento actual del array (el índice actual menos 1, porque "n" se incrementa antes de llamar a "callback")
    }, 50);
  })(0);

// Cambiar tema de color
const toogleTheme = (evt) => {
  evt.preventDefault();
  // Cambiar el tema del sitio y actualizar la preferencia del usuario en localStorage
  if (document.body.getAttribute("data-theme") === "dark") {
    themeLight();
    localStorage.setItem("theme", "light");
  } else {
    themeDark();
    localStorage.setItem("theme", "dark");
  }
};

// Para todas las paginas
document.addEventListener("DOMContentLoaded", () => {
  // Cambiar el tema del sitio según la preferencia del usuario
  if (currentTheme === "dark") {
    themeDark();
  } else {
    themeLight();
  }

  // Agregar un evento al botón que cambia el tema
  _(".toogle-theme").addEventListener("click", toogleTheme);
  _(".btn-menu").addEventListener("click", toogleNavigation);
  _(".btn-close").addEventListener("click", toogleNavigation);
});

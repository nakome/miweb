document.addEventListener("DOMContentLoaded", () => {
  if (_(".proyecto")) {
    let elem = document.querySelectorAll(".proyecto");
    anim(elem, (n) => elem[n].classList.add("show"));
  }
});

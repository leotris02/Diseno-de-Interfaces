const boton = document.querySelector(".btn-hamburguesa");
const menu = document.querySelector("#menu");

function alternarMenu() {
  const abierto = menu.classList.toggle("abierto");
  boton.setAttribute("aria-expanded", abierto);
}

boton.addEventListener("click", alternarMenu);

console.log("app.js conectado");

const cabecera = document.querySelector("header");
const tarjetas = document.querySelectorAll(".tarjeta");
console.log("Tarjetas encontradas:", tarjetas.length);

const titulo = cabecera.querySelector("h1");
const botonTitulo = document.querySelector("#cambiar-titulo");
const botonDestacado = document.querySelector("#alternar-destacado");

tarjetas[0].classList.add("destacado");

botonTitulo.addEventListener("click", function () {
  titulo.textContent = "Cambie el título con JavaScript";
});

botonDestacado.addEventListener("click", function () {
  tarjetas[0].classList.toggle("destacado");
});

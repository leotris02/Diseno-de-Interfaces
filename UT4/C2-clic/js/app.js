const boton = document.querySelector("#cambiar-tarjeta");
const primeraTarjeta = document.querySelector("#primera-tarjeta");
const segundaTarjeta = document.querySelector("#segunda-tarjeta");

function cambiarTexto() {
  primeraTarjeta.textContent = "Pollo 1 actualizado";
}

function mostrarMensaje() {
  console.log("El ratón pasó sobre Pollo 2");
}

boton.addEventListener("click", cambiarTexto);
segundaTarjeta.addEventListener("mouseover", mostrarMensaje);

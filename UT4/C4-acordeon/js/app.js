const preguntas = document.querySelectorAll("details");

function cerrarOtrasPreguntas(evento) {
  const preguntaAbierta = evento.currentTarget;

  if (preguntaAbierta.open) {
    for (const pregunta of preguntas) {
      if (pregunta !== preguntaAbierta) {
        pregunta.open = false;
      }
    }
  }
}

for (const pregunta of preguntas) {
  pregunta.addEventListener("toggle", cerrarOtrasPreguntas);
}

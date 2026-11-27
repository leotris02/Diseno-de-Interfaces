const preguntas = document.querySelectorAll("details");

preguntas.forEach(function (pregunta) {
  pregunta.addEventListener("toggle", function () {
    if (pregunta.open) {
      preguntas.forEach(function (otra) {
        if (otra !== pregunta) {
          otra.open = false;
        }
      });
    }
  });
});

const form = document.querySelector(".form");
const figure = document.querySelector("#figure");
const base = document.querySelector(".base");
const height = document.querySelector(".height");
const btn = document.querySelector(".btn");
const results = document.querySelector(".results");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  switch (figure.value) {
    case "square":
      square(base);
      break;
    case "rectangle":
      rectangle(base, height);
      break;
    case "triangle":
      triangle(base, height);
      break;
  }
});

figure.addEventListener("change", (e) => {
  isInputDisabled();
});
/**
 * Funcion para desactivar o activar los input,
 * dependiendo de la figura que se selecciona.
 */
function isInputDisabled() {
  switch (figure.value) {
    case "square":
      base.removeAttribute("disabled");
      height.setAttribute("disabled", true);
      break;
    case "rectangle":
    case "triangle":
      base.removeAttribute("disabled");
      height.removeAttribute("disabled");
      break;
    default:
      base.setAttribute("disabled", true);
      height.setAttribute("disabled", true);
      break;
  }
  //Ternario para desactivar los input si no se selecciona ninguna figura.
  figure.value != null && figure.value != "Seleccione figure..."
    ? btn.removeAttribute("disabled")
    : btn.setAttribute("disabled", true);
}

/**
 * Funcion para añadir los resultados de la operacion en un elemento, en caso de
 * haber resultados anteriores, se eliminan y se agrega el nuevo.
 * @param {int} result Parametro que recibe y añade al elemento como resultado de la operacion.
 */
function addResults(result) {
  const h1 = document.createElement("h1");
  h1.id = "h1";
  h1.textContent = `El area es: ${result}`;
  if (results.childElementCount > 0) {
    const remove = document.getElementById("h1");
    results.removeChild(remove);
  }
  results.appendChild(h1);
}
/**
 * Funcion para calcular el area del cuadrado
 * Cuenta con dos funciones:
 * -Para reiniciar el formulario.
 * -Para activar o desactivar input
 * @param {int} base Parametro para realizar la operacion
 */
function square(base) {
  if (base.value != "") {
    addResults(base.value * base.value);
    form.reset();
    isInputDisabled();
  }
}
/**
 * Funcion para calcular el area del rectangulo
 * Cuenta con dos funciones:
 * -Para reiniciar el formulario.
 * -Para activar o desactivar input
 * @param {int} base Parametro base para realizar la operacion
 * @param {int} height Parametro altura para realizar la operacion
 */
function rectangle(base, height) {
  if (base.value != "") {
    addResults(base.value * height.value);
    form.reset();
    isInputDisabled();
  }
}
/**
 * Funcion para calcular el area del triangulo
 * Cuenta con dos funciones:
 * -Para reiniciar el formulario.
 * -Para activar o desactivar input
 * @param {int} base Parametro base para realizar la operacion
 * @param {int} height Parametro altura para realizar la operacion
 */
function triangle(base, height) {
  if (base.value != "") {
    addResults((base.value * height.value) / 2);
    form.reset();
    isInputDisabled();
  }
}

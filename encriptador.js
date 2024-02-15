// Inicialmente, mantenemos todos los botones desactivados
document.querySelector(".button-2").disabled = true;
document.querySelector(".button").disabled = true;
document.querySelector(".button-3").disabled = true;

// Función para mostrar el área de entrada de texto
function mostrarCampoTexto() {
  // Obtenemos los elementos de texto
  var displayText = document.getElementById("displayText");
  var inputText = document.getElementById("inputText");

  // Cambiamos la visibilidad de los elementos de texto
  displayText.style.display = "none";
  inputText.style.display = "block";
  inputText.focus();

  // Establecemos estilos para el área de entrada de texto
  inputText.style.position = "relative";
  inputText.style.width = "520px";
  inputText.style.fontFamily = "Inter, Helvetica";
  inputText.style.fontWeight = "400";
  inputText.style.color = "var(--dark-bluedark-blue-300)";
  inputText.style.fontSize = "23px";
  inputText.style.letterSpacing = "0";
  inputText.style.lineHeight = "35px";
  inputText.style.border = "none";
  inputText.style.resize = "none";

  inputText.focus();
}

// Evento de entrada de texto para habilitar el botón de encriptar
document.getElementById("inputText").addEventListener("input", function () {
  var texto = this.value.trim();
  var botonEncriptar = document.querySelector(".button-2");

  if (texto.length > 0) {
    botonEncriptar.disabled = false;
  } else {
    botonEncriptar.disabled = true;
  }
});

// Función para ajustar la altura del área de entrada de texto dinámicamente
function ajustarAltura(input) {
  input.style.height = "auto";
  input.style.height = (input.scrollHeight) + "px";
  input.style.fontSize = "20px";
}

// Función para encriptar el texto
function encriptarTexto() {
  var textoInput = document.getElementById("inputText").value;

  // Reemplazamos caracteres según la lógica de encriptación
  var textoEncriptado = textoInput.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  // Actualizamos el texto en el área correspondiente
  var textWrapper4 = document.querySelector(".text-wrapper-4");
  textWrapper4.textContent = textoEncriptado;

  // Ocultamos el frame-3 y mostramos el overlap-group
  var frame3 = document.querySelector(".frame-3");
  frame3.style.display = "none";
  var overlapGroup = document.querySelector(".overlap-group");
  overlapGroup.style.display = "block";

  // Limpiamos el área de entrada de texto
  document.getElementById("inputText").value = "";

  // Habilitamos el botón de copiar
  var botonCopiar = document.querySelector(".button");
  botonCopiar.disabled = false;

  // Deshabilitamos el botón de encriptar
  var botonEncriptar = document.querySelector(".button-2");
  botonEncriptar.disabled = true;
}

// Función para desencriptar el texto
function desencriptarTexto() {
  var textoEncriptado = document.querySelector(".text-wrapper-4").textContent;

  // Reemplazamos caracteres según la lógica de desencriptación
  var textoDesencriptado = textoEncriptado.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  // Actualizamos el texto en el área correspondiente
  var textWrapper4 = document.querySelector(".text-wrapper-4");
  textWrapper4.textContent = textoDesencriptado;

  // Limpiamos el área de entrada de texto
  document.getElementById("inputText").value = "";
}

// Función para copiar el texto encriptado
function copiarTexto() {
  var textoEncriptado = document.querySelector(".text-wrapper-4");

  // Creamos un elemento textarea temporal para copiar el texto
  var textarea = document.createElement("textarea");
  textarea.value = textoEncriptado.textContent;
  document.body.appendChild(textarea);

  // Seleccionamos y copiamos el texto
  textarea.select();
  document.execCommand("copy");

  // Eliminamos el textarea temporal
  document.body.removeChild(textarea);

  // Habilitamos el botón de desencriptar
  var botonDesencriptar = document.querySelector(".button-3");
  botonDesencriptar.disabled = false;
}

// Función para restablecer los elementos de la interfaz
function restablecer() {
  // Mostramos el frame-3 y ocultamos el overlap-group
  var frame3 = document.querySelector(".frame-3");
  frame3.style.display = "block";
  var overlapGroup = document.querySelector(".overlap-group");
  overlapGroup.style.display = "none";

  // Ocultamos el área de entrada de texto y mostramos el texto de inicio
  var inputText = document.getElementById("inputText");
  var displayText = document.getElementById("displayText");
  inputText.style.display = "none";
  displayText.style.display = "block";

  // Deshabilitamos el botón de encriptar y habilitamos el botón de copiar
  var botonEncriptar = document.querySelector(".button-2");
  botonEncriptar.disabled = true;
}

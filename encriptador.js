function mostrarCampoTexto() {
  var displayText = document.getElementById("displayText");
  var inputText = document.getElementById("inputText");

  // Ocultar el texto y mostrar el campo de entrada de texto
  displayText.style.display = "none";
  inputText.style.display = "block";
  inputText.focus();

  // Establecer los estilos en el campo de entrada de texto
  inputText.style.position = "relative";
  inputText.style.width = "520px";
  inputText.style.fontFamily = "Inter, Helvetica";
  inputText.style.fontWeight = "400";
  inputText.style.color = "var(--dark-bluedark-blue-300)";
  inputText.style.fontSize = "23px";
  inputText.style.letterSpacing = "0";
  inputText.style.lineHeight = "35px";
  inputText.style.border = "none";
  inputText.style.resize = "none"; // Evita que el usuario pueda redimensionar el textarea

  // Enfocar el campo de entrada de texto para que el usuario pueda empezar a escribir de inmediato
  inputText.focus();

}

function ajustarAltura(input) {
  // Establecer la altura del campo de entrada de texto según su contenido
  input.style.height = "auto";
  input.style.height = (input.scrollHeight) + "px";
}



function encriptarTexto() {
  // Capturar el texto ingresado por el usuario
  var textoInput = document.getElementById("inputText").value;

  // Aplicar la lógica de encriptación
  var textoEncriptado = textoInput.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  // Mostrar el texto encriptado en el elemento text-wrapper-4
  var textWrapper4 = document.querySelector(".text-wrapper-4");
  textWrapper4.textContent = textoEncriptado;

  // Ocultar el frame-3 y mostrar el overlap-group
  var frame3 = document.querySelector(".frame-3");
  frame3.style.display = "none";

  var overlapGroup = document.querySelector(".overlap-group");
  overlapGroup.style.display = "block";

  // Limpiar el campo de texto después de encriptar el texto
  document.getElementById("inputText").value = "";
}

function desencriptarTexto() {
  // Capturar el texto encriptado copiado
  var textoEncriptado = document.querySelector(".text-wrapper-4").textContent;

  // Aplicar la lógica de desencriptación para revertir el texto encriptado al texto original
  var textoDesencriptado = textoEncriptado.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  // Mostrar el texto desencriptado en el elemento text-wrapper-4 sin encriptar
  var textWrapper4 = document.querySelector(".text-wrapper-4");
  textWrapper4.textContent = textoDesencriptado;

  // Limpiar el campo de texto después de desencriptar el texto
  document.getElementById("inputText").value = "";
}

function copiarTexto() {
  // Seleccionar el texto a copiar
  var textoEncriptado = document.querySelector(".text-wrapper-4");

  // Crear un elemento de texto temporal
  var textarea = document.createElement("textarea");
  textarea.value = textoEncriptado.textContent;
  document.body.appendChild(textarea);

  // Seleccionar y copiar el texto al portapapeles
  textarea.select();
  document.execCommand("copy");

  // Eliminar el elemento de texto temporal
  document.body.removeChild(textarea);
}

function restablecer() {
  // Mostrar el frame-3 y ocultar el overlap-group
  var frame3 = document.querySelector(".frame-3");
  frame3.style.display = "block";

  var overlapGroup = document.querySelector(".overlap-group");
  overlapGroup.style.display = "none";

  // Limpiar el campo de texto y mostrar el párrafo de "Ingresar texto aquí"
  var inputText = document.getElementById("inputText");
  var displayText = document.getElementById("displayText");
  inputText.style.display = "none";
  displayText.style.display = "block";
}







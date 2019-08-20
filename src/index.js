//Variaveis dos botoes
const btnCifrar = document.getElementById("btnCifrar");
const btnDecifrar = document.getElementById("btnDecifrar");

//Evento click CIFRAR
btnCifrar.addEventListener("click", () => {
  let textToEncode = document.getElementById("messageOne").value.toUpperCase();

  let numbToMove = document.getElementById("numb").value;

  let encodedText = window.cipher.encode(textToEncode, numbToMove);

  document.getElementById("messageTwo").value = encodedText;

});
//Evento Click DECIFRAR
btnDecifrar.addEventListener("click", () => {

  let textToDecode = document.getElementById("messageOne").value.toUpperCase();

  let numbToMove = document.getElementById("numb").value;

  let decodedText = window.cipher.decode(textToDecode, numbToMove);

  document.getElementById("messageTwo").value = decodedText;

});


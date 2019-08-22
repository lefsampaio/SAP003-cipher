window.onload = () => {
  //Variaveis dos botoes
  const btnCifrar = document.getElementById("btnCifrar");
  const btnDecifrar = document.getElementById("btnDecifrar");

  //Evento click CIFRAR
  btnCifrar.addEventListener("click", () => {
    let textToEncode = document.getElementById("mensagem1").value;

    let numberMove = document.getElementById("number").value;

    let encodedText = window.cipher.encode(numberMove, textToEncode);

    document.getElementById("mensagem2").value = encodedText;

  });
  //Evento Click DECIFRAR
  btnDecifrar.addEventListener("click", () => {

    let textToDecode = document.getElementById("mensagem1").value;

    let numberMove = document.getElementById("number").value;

    let decodedText = window.cipher.decode(numberMove, textToDecode);

    document.getElementById("mensagem2").value = decodedText;

  });

};
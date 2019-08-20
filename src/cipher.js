window.cipher = {

  //funcao de cifrar e de decifrar

  encode: (textToEncode, numbToMove) => {
    let result = "";
    for (let i = 0; i < textToEncode.length; i++) { //Passa por cada letra do input
      //Identifica qual letra do alfabeto
      //posicionando-a dentro do código ASCII
      //Faz o deslocamento mantendo dentro do alfabeto (26 letras)
      let letter = (textToEncode.charCodeAt(i) - 65 + parseInt(numbToMove)) % 26 + 65;
      //Convertendo o valor unicode ao caractere correspondente.
      result += String.fromCharCode(letter);
    }
    return result;
  },

  decode: (textToDecode, numbToMove) => {
    let result = "";
    for (let i = 0; i < textToDecode.length; i++) {
      //coloca a letra dentro do alfabeto 
      let letter = (textToDecode.charCodeAt(i) + 65 - parseInt(numbToMove)) % 26 + 65;
      //Convertendo o valor unicode ao caractere correspondente.     
      result += String.fromCharCode(letter);
    }
    return result;
  }
};
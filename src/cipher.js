window.cipher = {

  //funcao de cifrar e de decifrar

  encode: (numberMove, textToEncode) => {
    let result = "";
    let letter = "";

    for (let i = 0; i < textToEncode.length; i++) { //Passa por cada letra do input

      if (textToEncode.charCodeAt(i) >= 97 && textToEncode.charCodeAt(i) <= 122) {
        letter = (textToEncode.charCodeAt(i) - 97 + parseInt(numberMove)) % 26 + 97;

        result += String.fromCharCode(letter); //Convertendo o valor unicode ao caractere correspondente.

      } else if (textToEncode.charCodeAt(i) >= 65 && textToEncode.charCodeAt(i) <= 90) {

        letter = (textToEncode.charCodeAt(i) - 65 + parseInt(numberMove)) % 26 + 65;
        result += String.fromCharCode(letter);
      }
      else {

        result += textToEncode[i];
      }

    }
    return result;
  },

  decode: (numberMove, textToDecode) => {
    let result = "";
    let letter = "";

    for (let i = 0; i < textToDecode.length; i++) {
      if (textToDecode.charCodeAt(i) >= 97 && textToDecode.charCodeAt(i) <= 122) {

        letter = (textToDecode.charCodeAt(i) + 97 - parseInt(numberMove)) % 26 + 97;

        result += String.fromCharCode(letter);

      } else if (textToDecode.charCodeAt(i) >= 65 && textToDecode.charCodeAt(i) <= 90) {

        letter = (textToDecode.charCodeAt(i) + 65 - parseInt(numberMove)) % 26 + 65;

        result += String.fromCharCode(letter);
      }
      else {
        result += textToDecode[i];
      }
    }
    return result;
  }
};
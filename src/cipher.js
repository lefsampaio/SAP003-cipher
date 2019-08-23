window.cipher = {
  //funcao de cifrar e de decifrar
  encode: (numberMove, textToEncode) => {
    let result = "";

    for (let i = 0; i < textToEncode.length; i++) {
      if (textToEncode.charCodeAt(i) >= 97 && textToEncode.charCodeAt(i) <= 122) {

        result += String.fromCharCode(((textToEncode.charCodeAt(i) - 97) + (numberMove % 26 + 26)) % 26 + 97);

      } else if (textToEncode.charCodeAt(i) >= 65 && textToEncode.charCodeAt(i) <= 90) {

        result += String.fromCharCode(((textToEncode.charCodeAt(i) - 65) + (numberMove % 26 + 26)) % 26 + 65);
      }
      else {

        result += textToEncode[i];
      }

    }
    return result;
  },
  decode: (numberMove, textToDecode) => {
    let result = "";

    for (let i = 0; i < textToDecode.length; i++) {
      if (textToDecode.charCodeAt(i) >= 97 && textToDecode.charCodeAt(i) <= 122) {

        result += String.fromCharCode(((textToDecode.charCodeAt(i) - 122) - (numberMove % 26 + 26)) % 26 + 122);

      } else if (textToDecode.charCodeAt(i) >= 65 && textToDecode.charCodeAt(i) <= 90) {

        result += String.fromCharCode(((textToDecode.charCodeAt(i) - 90) - (numberMove % 26 + 26)) % 26 + 90);
      }
      else {

        result += textToDecode[i];
      }
    }
    return result;
  }
};
window.cipher = {

  encode: (numberMove, textToEncode) => {
    let result = "";
    for (let i = 0; i < textToEncode.length; i++) {
      const asciiCode = textToEncode.charCodeAt(i);
      const isLowerCase = asciiCode >= 97 && asciiCode <= 122;
      const isUpperCase = asciiCode >= 65 && asciiCode <= 90;
      if (isLowerCase) {
        result += String.fromCharCode(((asciiCode - 97) + (numberMove % 26 + 26)) % 26 + 97);
      } else if (isUpperCase) {
        result += String.fromCharCode(((asciiCode - 65) + (numberMove % 26 + 26)) % 26 + 65);
      }
      else {
        result += textToEncode[i];
      }
    }
    return result;
  },
  decode: (numberMove, textToDecode) => cipher.encode(-numberMove, textToDecode)
};
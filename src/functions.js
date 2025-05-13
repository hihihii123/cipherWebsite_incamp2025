
  export function xorCipher(text, key) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    result += String.fromCharCode(text.charCodeAt(i) ^ key);
  }
  return result;
}
function isLetter (str) {
  return str.length === 1 && str.match(/[a-zA-Z]/i)
}
 
/**
 * Check if is Uppercase or Lowercase
 * @param {String} character - character to check
 * @return {Boolean} result of the checking
 */
function isUpperCase (character) {
  if (character === character.toUpperCase()) {
    return true
  }
  if (character === character.toLowerCase()) {
    return false
  }
}
 
/**
 * Encrypt a Vigenere cipher
 * @param {String} message - string to be encrypted
 * @param {String} key - key for encrypt
 * @return {String} result - encrypted string
 */
export function Vigenereencrypt (message, key) {
  let result = ''

  for (let i = 0, j = 0; i < message.length; i++) {
    const c = message.charAt(i)
    if (isLetter(c)) {
      if (isUpperCase(c)) {
        result += String.fromCharCode(
          (c.charCodeAt(0) + key.toUpperCase().charCodeAt(j) - 2 * 65) % 26 + 65
        )
      } else {
        result += String.fromCharCode(
          (c.charCodeAt(0) + key.toLowerCase().charCodeAt(j) - 2 * 97) % 26 + 97
        )
      }
      // only advance key index when character is alphabetic
      j = (j + 1) % key.length
    } else {
      // non-alphabetic: leave as is and do not advance j
      result += c
    }
  }
  return result
}
export function text2Binary(text) {
  let binary = "";
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    let binaryChar = charCode.toString(2);
    binary += binaryChar.padStart(8, '0') + " ";
  }
  return binary.trim();
}
export function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
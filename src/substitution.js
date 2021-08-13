// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const original = "abcdefghijklmnopqrstuvwxyz";
  function uniqueChar(alphabet) {
    return new Set(alphabet).size == alphabet.length;
  } 

  function substitution(input, alphabet, encode = true) {
    if(!alphabet || alphabet.length != 26 || uniqueChar(alphabet) === false) return false;
    let result = "";
    input = input.toLowerCase();
    if(encode) {
      //get input[i] -> pos original -> pos alphabet
      for(let i = 0; i < input.length; i++) {
        if(input[i].match(/[a-z]/ig)) {
      const posOriginal = original.indexOf(input[i])
      const posAlphabet = alphabet[posOriginal];
      result += posAlphabet
      } else {
        result += input[i]
      }
    }
    } else {
      console.log(input)
      console.log(alphabet)
      for(let i = 0; i < input.length; i++) {
        if(input[i].match(/[a-z~!@#$%^&*()_+<>?.]/ig)) {
          const posAlphabet = alphabet.indexOf(input[i]);
          const posOriginal = original[posAlphabet];
          result += posOriginal;
        } else {
        result += input[i]
      }
    }
     } return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

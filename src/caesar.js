// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if(!shift || shift < -25 || shift > 25) return false;
    input = input.toLowerCase();
    let newStr = ""
    if(encode) {
      for (let i = 0; i < input.length; i++) {
        if(shift > 0) {
        if(input[i].match(/[a-z]/)) {
          newStr += String.fromCharCode(97+(input.charCodeAt(i)+shift-97)%26)
        } else {
          newStr += input[i]
        }
      } else if(shift < 0){
        let shift2 = 26 + (shift %26)
        if(input[i].match(/[a-z]/)) {
          newStr += String.fromCharCode(97+(input.charCodeAt(i)+shift2-97)%26)
        console.log(newStr)
        } else {
          newStr += input[i]
        }
      }
    }
  }
  if(encode === false) {
    for (let i = 0; i < input.length; i++) {
      if(shift < 0) {
      if(input[i].match(/[a-z]/)) {
        newStr += String.fromCharCode(97+(input.charCodeAt(i)-shift-97)%26)
        console.log(shift)
      } else {
        newStr += input[i]
      }
    } else if(shift > 0) {
      let shift2 =  (shift %26) - 26
      if(input[i].match(/[a-z]/)) {
        newStr += String.fromCharCode(97+(input.charCodeAt(i)-shift2-97)%26)
      } else {
        newStr += input[i]
      }
    }
  }
  }

    return newStr
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

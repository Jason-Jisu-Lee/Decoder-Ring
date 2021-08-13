// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  const encodeAlpha = ["a","b","c","d","e","f","g","h","i","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","0","0","0","0","0","0","0","j"];
  const encodeNum = "012345"
  const polybiusCodes = {
    a: "11",
    b: "21",
    c: "31",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    i: "42",
    j: "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "53",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55",
    " ": " ",
  };

  function polybiusDecode(input) {
    if (input.replace(/\s/g, '').length %2 !== 0) return false;
    let output = "";
    let code = "";
    for (let i = 0; i < input.length; i += 2) {
      if (input[i] === " ") {
        code = " ";
        i--;
      } else {
        code = input[i] + input[i + 1];
      }
      let char = Object.keys(polybiusCodes).find(
        (key) => polybiusCodes[key] === code
      );
      if (char === "i") char = "(i/j)";
      if(!char) {output = false; break;}
      output += char;
    }
    return output;
  }

  function polybius(input, encode = true) {
    const result = [];

    if(encode){
      input = input.toLowerCase();
      for(let i = 0; i < input.length; i++) {
      if(input[i].match(/[a-z]/g)) {
        const pos = encodeAlpha.indexOf(input[i]);
        const x = encodeNum[pos%5+1]
        const y = encodeNum[(Math.floor(pos/5))%5 + 1]
        result.push(`${x}${y}`)
      } else {
        result.push(input[i])
      }
    }

    } else { return polybiusDecode(input)
        }
        return result.join('')
    };


  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


function maxChar(str){
  let obj = {};
  let max = 0; 
  let maxChar = '';
  // enter char in obj
  for (let char of str){
    // every time you see char, + 1
    (!obj[char] ? obj[char] = 1 : obj[char] ++) 
  }

  for (let char in obj){
    if (obj[char] > max){
      max = obj[char];
      maxChar = char;
    }
  }
  return maxChar;
  // return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
  
}

console.log(maxChar('aapleeee'))

// function maxChar(str) {
//   let obj = {};
//   let max = 0; 
//   let maxChar = '';

//   for (let char of str) {
//     (!obj[char] ? obj[char] = 1 : obj[char]++) 
//     // char = a , p 
//     // obj[char] = key 
//   }

  // for (let char in obj){
  //   if (obj[char] > max){
  //     max = obj[char];
  //     maxChar = char;
  //   }
//   }
//   return maxChar;
  

//   // for (let i = 0; i < str.length; i++){
//   //   (!obj[str[i]] ? obj[str[i]] = 1 : obj[str[i]] += 1)
//   // }

//   // return Object.keys(obj).reduce((a, b) => obj[a]> obj[b] ? a : b);
// }

module.exports = maxChar;

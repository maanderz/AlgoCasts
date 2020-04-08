// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// SOLUTION #1 - 0.737s
// function palindrome(str) {
//   // reverse string
//   let reverse = str.split('').reduce((inProgress, char) => {
//     return char + inProgress 
//   }, '')
  
//   // compare two strings
//   return reverse === str;
// }



// SOLUTION #2 - 0.772s
// function palindrome(str) {
//   // reverse string
//   let reverse = str.split('').reverse().join('')
  
//   // compare two strings
//   if (reverse === str){
//     return true; 
//   } else {
//     return false
//   }
// }



// SOLUTION #3 - 1.577 s
// function palindrome(str){
//   let reverse = '';
//   for (let i = str.length -1; i >= 0; i--){
//     reverse += str[i]
//   }
//   return (reverse === str ? true : false);
// }



// SOLUTION #4 
function palindrome(str){
  return str.split('').every((char, i) =>{
    return char === str[str.length - i - 1];
  })
}

module.exports = palindrome;

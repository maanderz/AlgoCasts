// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// SOLUTION #3 
function reverse(str) {
  debugger;
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

// SOLUTION #2
// function reverse(str) {
//   let answer = ''
//   // CLASSIC FOR LOOP
//   // for (let i = str.length -1; i >= 0; i--){
//   //   answer += str[i]
//   // } 
//   // return answer

//   // FOR OF LOOP
//   for (let character of str) {
//     answer = character + answer
//   }
//   return answer
// }



// SOLUTION #1 
// function reverse(str) {
//   let split = str.split('')
//   return split.reverse().join('');
// }

module.exports = reverse;

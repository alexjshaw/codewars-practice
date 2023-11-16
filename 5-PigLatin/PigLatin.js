/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

// function pigIt(str){
//   const regex = /[!.,?]/;
//   const words = str.split(" ")
//   let answer = ""
//   for (let i = 0; i < words.length; i++) {
//       let letters = words[i].split("")
//     if (!letters.every(char => regex.test(char))) {
//       letters.push(letters.shift() + "ay")
//       words[i] = letters.join("")
//     }
//   }
//   answer = words.join(" ")
//   return answer
// }

function pigIt(str) {
  const answer = str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
  console.log(answer)
  return answer
}

pigIt('Pig latin is cool')
pigIt(`Hello world !`)


module.exports = pigIt
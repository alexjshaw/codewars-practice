/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

// Split string in to separate words by splitting at spaces
// For each word, check
// For each word, split in to characters, move first character to end and add "ay"
function pigIt(str){
  const words = str.split(" ")
  // console.log(words)
  let answer = ""
  for (let i = 0; i < words.length; i++) {
    let letters = words[i].split("")
    // let firstLetter = letters[0]
    // let toIndex = letters.length - 1
    // letters.splice(0, 1)
    // letters.splice(toIndex, 0, firstLetter)
    letters.push(letters.shift() + "ay")
    // letters.push("ay")
    words[i] = letters.join("")
  }
  console.log(words)
}

pigIt('Pig latin is cool')
// pigIt('Hello world !')

module.exports = pigIt
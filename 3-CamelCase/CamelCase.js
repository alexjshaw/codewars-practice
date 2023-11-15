/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

// Convert string in to array of letters
// Iterate through array, check each index
// If "-" or "_", remove and convert next letter to upper case

function toCamelCase(str){
  const chars = [...str]

  if (chars.length === 0) {
    return ""
  }

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] == "-" || chars[i] == "_") {
      chars[i+1] = chars[i+1].toUpperCase()
      chars.splice(i, 1)
    }
  }
  const output = chars.join("")
  return output
}

// toCamelCase('')
// toCamelCase("the_stealth_warrior")
// toCamelCase("The-Stealth-Warrior")
// toCamelCase("A-B-C")

module.exports = toCamelCase
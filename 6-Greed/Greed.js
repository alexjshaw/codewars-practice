/*
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
*/

// Create an object for triple scores and single scores
// Create an object with keys of the dice value, and values of the number of times that number appears
// Iterate through this object, if dice appears 3 times or more, look it up in triples, remove from array and continue

function score( dice ) {
  let tripleScores = {
    1: 1000,
    6: 600,
    5: 500,
    4: 400,
    3: 300,
    2: 200
  }

  let singleScores = {
    1: 100,
    5: 50
  }

  const diceCount = {}
  let total = 0
  dice.forEach(num => {
    diceCount[num] = (diceCount[num] || 0) + 1;
  });

  for (const num in diceCount) {
    const count = diceCount[num];
    const triples = Math.floor(count / 3);
    const singles = count % 3;

    total += triples * (tripleScores[num] || 0);
    total += singles * (singleScores[num] || 0);
  }

  console.log(total)
  return total
}

score([1,1,1,1,1,1])
score([2, 3, 4, 6, 2])
score([4, 4, 4, 3, 3])
score([2, 4, 4, 5, 4])

module.exports = score
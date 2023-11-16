const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
const pigIt = require("../5-PigLatin/PigLatin")

describe("Tests", () => {
  it("test", () => {
assert.strictEqual(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
assert.strictEqual(pigIt('This is my string'),'hisTay siay ymay tringsay')
});
});

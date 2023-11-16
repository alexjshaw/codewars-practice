const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
const score = require("../6-Greed/Greed")

describe("Scorer Function", function() {
  it("should value this as worthless", function() {
    assert.strictEqual(score([2, 3, 4, 6, 2]), 0, "Should be 0 :-(");
  });

  it("should value this triplet correctly", function() {
    assert.strictEqual(score([4, 4, 4, 3, 3]), 400, "Should be 400");
  });

  it("should value this mixed set correctly", function() {
    assert.strictEqual(score([2, 4, 4, 5, 4]), 450, "Should be 450");
  });
});
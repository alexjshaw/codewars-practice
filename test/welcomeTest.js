const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
const greet = require('../1-Welcome/Welcome');

describe("Tests", () => {
  it("should return 'Welcome' for 'english'", () => {
    assert.strictEqual(greet('english'), 'Welcome');
  });

  it("should return 'Welkom' for 'dutch'", () => {
    assert.strictEqual(greet('dutch'), 'Welkom');
  });

  it("should return 'Welcome' for 'IP_ADDRESS_INVALID'", () => {
    assert.strictEqual(greet('IP_ADDRESS_INVALID'), 'Welcome');
  });
});

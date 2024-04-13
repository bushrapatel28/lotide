const assert = require('chai').assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns 2 for ['Yo Yo', 'Lighthouse', 'Labs'] after executing tail", () => {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
  });

  it("returns [] for [5]", () => {
    assert.deepEqual(tail([5]), []);
  });

  it("returns 0 for [5] after executing tail", () => {
    assert.strictEqual(tail([5]).length, 0);
  });

  
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns 0 for [] after executing tail", () => {
    assert.strictEqual(tail([]).length, 0);
  })

});

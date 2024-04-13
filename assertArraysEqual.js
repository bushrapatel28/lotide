const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arr1, arr2) {
  let returnedValue = eqArrays(arr1, arr2);

  if (returnedValue) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;

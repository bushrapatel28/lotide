const eqArrays = function(arr1, arr2) {
  let result = true;

  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        result = false;
        return result;
      }
    }
  } else {
    result = false;
  }
  return result;
};

const assertArraysEqual = function(arr1, arr2) {
  let returnedValue = eqArrays(arr1, arr2);

  if (returnedValue) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2], [1, 2, 3]);
assertArraysEqual([1, 3, 2], [1, 2, 3]);

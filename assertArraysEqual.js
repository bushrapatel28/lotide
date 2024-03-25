const assertArraysEqual = function(arr1, arr2) {
  let result = '';

  if (arr1.length === arr2.length) {
    result = `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        result = `❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`;
        return result;
      }
    }
  } else {
    result = `❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`;
  }
  return result;
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2], [1, 2, 3]));
console.log(assertArraysEqual([1, 3, 2], [1, 2, 3]));

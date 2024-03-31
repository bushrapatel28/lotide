const eqArrays = function(arr1, arr2) {
  
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  let returnedValue = eqArrays(arr1, arr2);

  if (returnedValue) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


const words = ["ground", "control", "to", "major", "tom"];

const map = function(arrayToMap, callBack) {
  const results = [];
  for (let item of arrayToMap) {
    results.push(callBack(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, (word) => word.length), [6, 7, 2, 5, 3]);
assertArraysEqual(map(words, (word) => word.indexOf("o")), [2, 1, 1, 3, 1]);
assertArraysEqual(map(words, (word) => word.toUpperCase()), ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
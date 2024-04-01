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


const takeUntil = function(array, callback) {
  let result = [];
  
  for (let index in array) {
    if (callback(array[index])) {
      result = array.slice(0, index);   //slicing the array from the beginning (index 0) until true valued element found at index
      break;                  //Loop exists once callback returns true value;
    }
  }
  
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", 'been', 'to', 'Hollywood']);
assertArraysEqual(takeUntil(data2, x => x.length === 2), ["I've", 'been']);

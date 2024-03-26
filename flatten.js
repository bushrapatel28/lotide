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

const flatten = function(arr) {
  //console.log("Joined: ", arr.join());
  //console.log(Array.isArray(arr));
  let flatArray = [];

  for (let element of arr) {
    if (Array.isArray(element)) {
      flatArray = flatArray.concat(element);
    } else {
      flatArray.push(element);
    }
  }
  return flatArray;
};

const a1 = [1, 2, [3, 4], [5, 6, 7]];
assertArraysEqual(flatten(a1), [1, 2, 3, 4, 5, 6, 7]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6,]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, 6]), [1, 2, 3, 4, 5, 6,]);



// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const flatArray = arr1.concat(arr2);
// console.log (flatArray);
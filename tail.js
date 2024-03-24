const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let newArr = [];

  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// for (let t = 0; t < result.length; t++) {
//   assertEqual(result[t], ["Lighthouse", "Labs"][t]);
// }

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

tail([5]);
tail([]);
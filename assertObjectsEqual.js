const eqObjects = function(object1, object2) {
  const arrOfObjKeys1 = Object.keys(object1);
  const arrOfObjKeys2 = Object.keys(object2);
  let result = false;

  if (arrOfObjKeys1.length !== arrOfObjKeys2.length) {
    return false;
  } else {
    for (let i = 0; i < arrOfObjKeys1.length; i++) {
      for (let j = 0; j < arrOfObjKeys2.length; j++) {
        if (arrOfObjKeys1[i] === arrOfObjKeys2[j]) {
          if (object1[arrOfObjKeys1[i]] === object2[arrOfObjKeys2[j]]) {
            result = true;
          } else {
            return false;
          }
        }
      }
    }
  }
  return result;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  // console.log(`Example label: ${inspect(actual)}`);
  let returnedValue = eqObjects(actual, expected);

  if (returnedValue) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject, anotherShirtObject);
assertObjectsEqual(shirtObject, longSleeveShirtObject);
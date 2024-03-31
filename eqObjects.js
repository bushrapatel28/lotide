const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  const arrOfObjKeys1 = Object.keys(object1);
  const arrOfObjKeys2 = Object.keys(object2);
  let result = false;

  if (arrOfObjKeys1.length !== arrOfObjKeys2.length) {
    return false;
  } else {
    for (let key of arrOfObjKeys1) {            //Looping over keys of object1
      if (arrOfObjKeys2.includes(key)) {         //Checking if the same key exists in object2
        if (object1[key] !== object2[key]) {
          return false;
        } else {
          result = true;
        }
      } else {
        result = false;
        break;
      }
    }
  }
  return result;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject);
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

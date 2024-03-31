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

const eqObjects = function(object1, object2) {
  const arrOfObjKeys1 = Object.keys(object1);
  const arrOfObjKeys2 = Object.keys(object2);
  let result = false;

  if (arrOfObjKeys1.length !== arrOfObjKeys2.length) {
    return false;
  } else {
    for (let key of arrOfObjKeys1) {            //Looping over keys of object1
      if(arrOfObjKeys2.includes(key)) {         //Checking if the same key exists in object2
        if(Array.isArray(object1[key]) || Array.isArray(object2[key])) { //Equality check for Object key's array values
        result = eqArrays(object1[key], object2[key]);
        } else if(object1[key] === object2[key]) {    //Equality Check for Object key's values
          result = true;
        } else {
          return false;
        }
      }
      // if (!arrOfObjKeys2.includes(key) || !eqArrays(object1[key], object2[key])) {
      //   return false;
      // }
    }
  //   for (let key1 of arrOfObjKeys1) {   //Looping over keys of object1
  //     for(let key2 of arrOfObjKeys2) {  //Looping over keys of object2
  //       if(key1 === key2) {             //Checking for keys equality
  //       } 
  //     }
  //   }
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
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject, anotherShirtObject);
assertObjectsEqual(shirtObject, longSleeveShirtObject);
assertObjectsEqual({a: '1', b: 2}, {b: 2, a: '1'});
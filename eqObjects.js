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
    for (let key1 of arrOfObjKeys1) {   //Looping over keys of object1
      for(let key2 of arrOfObjKeys2) {  //Looping over keys of object2
        if(key1 === key2) {             //Checking for keys equality
          if(object1[key1] === object2[key2]) {    //Equality Check for Object key's values
            result = true;
          } else {
            return false;
          }
        } 
      }
    }
  }
    // for (let i = 0; i < arrOfObjKeys1.length; i++) {
    //   for (let j = 0; j < arrOfObjKeys2.length; j++) {
    //     if (arrOfObjKeys1[i] === arrOfObjKeys2[j]) {
    //       if (object1[arrOfObjKeys1[i]] === object2[arrOfObjKeys2[j]]) {
    //         result = true;
    //       } else {
    //         return false;
    //       }
    //     }
    //   }
    // }
  return result;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject);
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

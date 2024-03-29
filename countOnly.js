const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {   //Using for...of for Iterating over Array
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  // for (const key in itemsToCount) {  //Using for...in for Iterating over Object keys
  //   let count = 0;
  //   for (const item of allItems) {   //Using for...of for Iterating over Array
  //     if (item === key) {           //Checking if element is present in Object as a key
  //       if (itemsToCount[key]) {    //Checking if key has a Truthy Value
  //         count += 1;
  //         results[key] = count;  //Adding found Key in Result Object and Setting its Value
  //       }
  //     }
  //   }
  // }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
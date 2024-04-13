const assertEqual = require("./assertEqual");

const head = function(arr) {
  const newArr = arr.flat();
  return newArr[0];
};

module.exports = head;
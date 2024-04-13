const assertEqual = require("../assertEqual");
const tail = require("../tail");

const result = tail(["Hello", "Lighthouse", "Labs"]);
for (let t = 0; t < result.length; t++) {
  assertEqual(result[t], ["Lighthouse", "Labs"][t]);
}

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

tail([5]);
assertEqual(tail([5]).length, 0);
tail([]);
assertEqual(tail([]).length, 0);
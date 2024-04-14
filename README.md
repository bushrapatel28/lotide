# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @bushra.patel/lotide`

**Require it:**

`const _ = require('@bushra.patel/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(arr)`: Returns the first item in the array.
- `tail(arr))`: Returns the "tail" of an array: everything except for the first item (head) of the provided array.
- `middle(arr)`: Returns the middle-most element(s) of the given array.
- `flatten(arr)`: Returns a "flattened" version of the array (including nested arrays).
- `without(source, itemsToRemove)`: Returns a subset of a given array, removing unwanted elements.
- `takeUntil(array, callback)`: Keeps collecting items from a provided array until the callback provided returns a truthy value.
- `map(array, callback)`: Returns a new array based on the results of the callback function.
- `countOnly(allItems, itemsToCount)`: Returns an object containing counts of everything that the input object listed.
- `countLetters(sentence)`: Returns a count of each of the letters in that sentence.
- `letterPositions(sentence)`: Returns all the indices (zero-based positions) in the string where each character is found.
- `findKeyByValue(objectToScan, value)`: Returns the first key which contains the given value. If no key with that given value is found, then it should return undefined.
- `findKey(objectToScan, callback)`: Returns the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
- `assertEqual(actual, expected)`: Compares the two values it takes in and print out a message telling us if they match or not.
- `eqArrays(array1, array2)`: Returns true or false, based on a perfect match.
- `assertArraysEqual(array1, array2)`: Prints (console.log) an appropriate message to the console.
- `eqObjects(object1, object2)`: Returns true or false, based on a perfect match.
- `assertObjectsEqual(actual, expected)`: Prints (console.log) an appropriate message to the console.
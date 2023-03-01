// Question
// Write an ES6 function that takes an array of strings and returns an array with all the strings capitalised using the map method.

const capitalizeArray1 = strArray => strArray.map(str => str.toUpperCase());

const capitalStr = str => str.toUpperCase();
const capitalizeArray = strArray => strArray.map(capitalStr);

const myArray = ['apple', 'banana', 'cherry'];
console.log(capitalizeArray(myArray));
// Output: ["APPLE", "BANANA", "CHERRY"]
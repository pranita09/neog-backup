// Question
// Given an array, write an ES6 function to return a new array with all the elements multiplied by 5.

const numbers = [1, 2, 3, 4];

const multiplyByFive = arrayOfNumbers => arrayOfNumbers.map(num => num * 5);

console.log(multiplyByFive(numbers)); // Output: [5, 10, 15, 20]
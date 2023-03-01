// Question
// Write an ES6 function that takes an array of numbers and returns an array with each number incremented by 3 using the map method.

const incrementNumbers1 = numArray => numArray.map(num => num + 3);

const addThree = num => num + 3;
const incrementNumbers = numArray => numArray.map(addThree);

const numbers = [1, 2, 3, 4, 5];
console.log(incrementNumbers(numbers));
// Output: [4, 5, 6, 7, 8]
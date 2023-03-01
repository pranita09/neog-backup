// Question
// Write an ES6 function that takes an array of strings and returns an array with only the strings that have a length greater than 5.

const filterLongStrings1 = arrayOfStrings => arrayOfStrings.filter(str => str.length > 5);

const strMoreThanFive = str => str.length > 5;
const filterLongStrings = arrayOfStrings => arrayOfStrings.filter(strMoreThanFive);

const fruits = ['apple', 'banana', 'cherry', 'watermelon', 'pineapple'];
console.log(filterLongStrings(fruits)); 
// Output: ["banana", "cherry", "watermelon", "pineapple"]
// Question
// Write an ES6 function that takes an array of strings and returns a single string that is the concatenation of all the strings using the reduce function.

const strings = ['Hello', ' ', 'world', '!'];

// Your code here
const concatenateStrings = arrayOfStrings => arrayOfStrings.reduce((acc, curr)=> acc + curr, "");

console.log(concatenateStrings(strings)); 
// Output: "Hello world!"
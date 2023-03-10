// Question
// Write an ES6 function that takes an array of strings as input and concatenates them into a single string.

// Your code here
const concatStrings = stringsArray => stringsArray.reduce((acc, curr)=> acc+curr, "")

console.log(concatStrings(['this', 'is', 'fun'])); // Output: 'thisisfun'
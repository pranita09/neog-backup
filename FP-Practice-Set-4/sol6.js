// Question
// Write an ES6 function that takes an array of strings and returns the longest string.

const strings = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];
// Your code here

const longestString = strings => strings.reduce((acc, curr)=> acc.length<curr.length ? curr : acc ,strings[0]);

console.log(longestString(strings)); 
// Output: 'Haule Haule'
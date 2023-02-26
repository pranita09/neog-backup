// Question
// Write a function that takes a string as input and determines if it is longer than 5 characters.

const checkLength = str => str.length>5 ? `more than 5` : `less than 5`;

console.log(checkLength("Programming"));
console.log(checkLength("Jeep")); 

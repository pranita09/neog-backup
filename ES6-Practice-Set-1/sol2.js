// Question
// Write a function that takes two numbers as input and determines which one is greater.

const isGreater = (num1, num2) => num1>num2 ? `${num1} is greater than ${num2}` : `${num2} is greater than ${num1}`;

console.log(isGreater(2, 5));
console.log(isGreater(10, 5));
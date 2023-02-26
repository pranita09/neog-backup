// Question
// Write an ES6 function to return the sum of only first 2 elements of the array .

// const sumFirstTwoElements1 = ([first, second, ...restElements]) => first + second;
const sumFirstTwoElements = ([first, second,]) => first + second;         // destructuring of array

console.log(sumFirstTwoElements([10, 4, 3, 7, 1, 5])) // 14
console.log(sumFirstTwoElements([12, 14, 3, 27, 15])) // 26
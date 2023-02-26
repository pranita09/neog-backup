// Question
// Write a function that takes an array and returns the first element of the array.


// const firstElement = ([a, ...arr]) => console.log(a);    // new apporoach using spread operator  very interesting

const firstElement = arr => arr[0];

console.log(firstElement([1, 2, 3, 4, 5])); // 1
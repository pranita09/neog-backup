// Question
// Write a function that uses destructuring to extract the first two elements from an array, and returns them in an object with keys 'first' and 'second'.

// const pickFirstAndSecond = ([first, second, ...restArrayItems]) => ({first, second});
const pickFirstAndSecond = ([first, second,]) => ({first, second});

// Here first we used rest operator to extract first two elements from array. This means we destructured the array. Then...... is it object literal shorthand property???

console.log(pickFirstAndSecond1(["orange", "banana", "apple"]));
// {first: 'orange', second: 'banana'}

console.log(pickFirstAndSecond1(["red", "blue", "green"]));
// {first: 'red', second: 'blue'}
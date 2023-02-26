// Question
// Write an ES6 function to return the second element of the given array by multiplying 20 to it.

// const printSecondCharacter = ([first, second, ...restCharacters]) => second * 20;
const printSecondCharacter = ([first, second]) => second * 20;

console.log(printSecondCharacter([1, 2, 3, 5, 8]))
// 40
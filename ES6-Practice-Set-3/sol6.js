// Question
// Write an ES6 function to return only the first character of the given array.

// const printFirstCharacter1 = ([firstCharacter, ...restCharacters]) => firstCharacter;
const printFirstCharacter1 = ([firstCharacter]) => firstCharacter;        // destructuring of an array

console.log(printFirstCharacter([1, 2, 3, 5, 8]))
// 1
// Question
// Write a function that takes an object person and a number num as arguments and returns true if the person's age plus num is greater than or equal to 22. Otherwise, it should return false.

// const isEligible = (person, num) => person.age + num >= 22;
// const isEligible = (person, num) => person['age'] + num >= 22;


const isEligible = ({age}, num) => age + num >=22         // used destructuring

const person1 = { name: 'Ajay', age: 20 };
console.log(isEligible(person1, 1)); // false
console.log(isEligible(person1, 2)); // true


// Here in first console statement I made num argument as 0 instead of 1 because it will give sum 20 not 21 
// Question
// Write a function that takes an object representing a person's information (name, age, occupation) and returns a template literal that includes the person's name and age in a sentence.

const personInfo = ({name, age, occupation}) => `${name} is ${age} years old.`;

// first we destructured the object and used the values
// no need to use occupation key when destructuring because we are not using it while returning

const person1 = { name: 'John', age: 25, occupation: 'Software Engineer' };
const person2 = { name: 'Jane', age: 45, occupation: 'Data Analyst' };
console.log(personInfo(person1)) // Expected output: "John is 25 years old."
console.log(personInfo(person2)) // Expected output: "Jane is 45 years old."
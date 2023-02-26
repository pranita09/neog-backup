// Question
// Create a function changeOccupation that takes an object person and a string newOccupation as parameters, and changes the occupation property of the person object to the newOccupation. Log the person object to the console before and after calling the function.

const person = {
    name: "Amit",
    age: 25,
    occupation: "Software Engineer"
}

// Your ES6 code here

//const changeOccupation = (personObj, newOccupation) => personObj.occupation = newOccupation;

const changeOccupation = (personObj, newOccupation) => personObj['occupation'] = newOccupation;


console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Software Engineer' } to the console
changeOccupation(person, 'Product Manager');
console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Product Manager' } to the console
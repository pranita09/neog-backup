// Question
// Write an ES6 function that takes an array of objects with the properties name and age, and returns an array with only the objects that have an age greater than 30.

const filterByAge1 = arrayOfPeople => arrayOfPeople.filter(person => person.age > 30);

const ageMoreThan30 = person => person.age > 30;
const filterByAge2 = arrayOfPeople => arrayOfPeople.filter(ageMoreThan30);

const filterByAge = arrayOfPeople => arrayOfPeople.filter(({age}) => age > 30);    // using destructuring

const people = [
    { name: 'Rahul', age: 25 },
    { name: 'Raj', age: 35 },
    { name: 'Vijay', age: 45 }
  ];
  
  console.log(filterByAge(people)); 
  // Output: [{ name: 'Raj', age: 35 }, { name: 'Vijay', age: 45 }]
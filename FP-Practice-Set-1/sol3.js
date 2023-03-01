// Question
// Write an ES6 function that takes an array of objects representing people and returns an array of their ages using the map method.

const getAges1 = arrayOfPeople => arrayOfPeople.map(person => person.age);

// const getAges = arrayOfPeople => arrayOfPeople.map({age} => age)        // use destructuring

const ageOfPerson = person => person.age;
const getAges = arrayOfPeople => arrayOfPeople.map(ageOfPerson);

const people = [
    { name: 'Ankit', age: 25 },
    { name: 'Vinit', age: 24 },
    { name: 'Shashi', age: 29 }
  ];
  const ages = getAges(people);
  console.log(ages); // Output: [25, 24, 29]
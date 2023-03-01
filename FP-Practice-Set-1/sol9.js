// Question
// Write an ES6 function that takes an array of objects with the properties name and score, and returns an array with only the objects that have a score greater than 80.

const filterByScore1 = arrayOfStudents => arrayOfStudents.filter(student => student.score > 80);

const scoreMoreThan80 = student => student.score > 80;
const filterByScore = arrayOfStudents => arrayOfStudents.filter(scoreMoreThan80);

const students = [
    { name: 'Aditya', score: 85 },
    { name: 'Bob', score: 75 },
    { name: 'Charlie', score: 90 }
  ];
  
  console.log(filterByScore(students)); 
  // Output: [{ name: 'Aditya', score: 85 }, { name: 'Charlie', score: 90 }]
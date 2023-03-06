// Question
// Write an ES6 function that takes an array of objects containing student information (name, age, grade) and returns an array with only the students who have a grade above a certain value.

const students = [
    { name: "Alice", age: 16, grade: 90 },
    { name: "Bob", age: 17, grade: 80 },
    { name: "Charlie", age: 15, grade: 95 },
    { name: "David", age: 16, grade: 85 },
];

// Your code here
const filterStudentsByGrade = (arrayOfStudents, gradeToCheck) => arrayOfStudents.filter(({grade})=> grade > gradeToCheck);  
  
const highGradeStudents = filterStudentsByGrade(students, 85);
console.log(highGradeStudents); 
// Output: [{ name: "Alice", age: 16, grade: 90 }, { name: "Charlie", age: 15, grade: 95 }]
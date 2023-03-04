// Question 11
// Write an ES6 function that takes an array of objects representing students with properties name and grade. Return the first student object that has a grade of "B" and they are also a scholarship student.

const students3 = [
  { name: "John", grade: "B", scholarship: false },
  { name: "Mary", grade: "A", scholarship: true },
  { name: "Sam", grade: "A", scholarship: false },
  { name: "Sarah", grade: "B", scholarship: true },
];

// Your code here
const findStudent = arrayOfStudents => arrayOfStudents.find(({grade, scholarship}) => grade==="B" && scholarship);

const student2 = findStudent(students3);
console.log(student2); 
// Output: { name: "Sarah", grade: "B", scholarship: true }
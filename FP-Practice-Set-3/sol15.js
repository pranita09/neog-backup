// Question
// Write an ES6 function that takes an array of numbers and returns the minimum number using the reduce function.

const numbers = [10, 5, 8, 3, 6];

// Your code here
const getMinimumNumber1 = arrayOfNumbers => arrayOfNumbers.reduce((acc, curr) => {
    if(curr < acc){
        acc = curr;
    }
    return acc;
}, arrayOfNumbers[0])

//alternate
const getMinimumNumber = arrayOfNumbers => arrayOfNumbers.reduce((acc, curr)=> curr<acc ? acc = curr : acc, arrayOfNumbers[0]);

console.log(getMinimumNumber(numbers)); 
// Output: 3
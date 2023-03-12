// Question
// Write an ES6 function that takes an array of strings and returns an object with the count of each string.

const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'apple', 'banana'];

// Your code here
const countStrings = strings => strings.reduce((acc, curr)=> {
    if(acc[curr]){
        acc[curr]++;
    }else{
        acc[curr] = 1;
    }
    // console.log(acc[curr])
    // return {...acc, [curr]: acc[curr]};
    return acc;
},{})

console.log(countStrings(fruits));
// Output: { 'apple': 3, 'banana': 3, 'cherry': 1 }

const frequencyOfWords1 = strings => strings.reduce((acc, curr)=>{
    acc[curr] = (acc[curr] ? acc[curr]+1 : 1)
    return acc;
},{})

// console.log(frequencyOfWords1(fruits));
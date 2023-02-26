// Question
// Write an ES6 function to return sum of all numbers at even indices of the given array.

const sumOfEvenIndices = array => {
    let sum = 0;
    for(let i=0; i<array.length; i++){
        if(array[i]%2 === 0){
            sum += array[i];
        }
    }
    return sum;
}

// how can we use more es6 here?
// why second console is giving 26?

console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5])); // 6
console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])); // 30
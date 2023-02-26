// Question
// Write an ES6 function that takes an array of numbers and returns the average of all the numbers. Avoid using in-built methods.

const calculateAverage  = array => {
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum += parseInt(array[i]);
    }
    // console.log(sum);
    return sum/array.length;
}

console.log(calculateAverage([1, 2, 3, 4, 5])); // 3


// while adding elements of an array to the sum, we need to use parseInt to aaray[i] sometimes. If in case it only concates the elements of the array. 
// If any one of the element is not a number in array, the sum will be NaN.
// Question
// Write an ES6 function to return the first element which is a multiple of 5 in the given array.

const printMultipleOfFive = array => {
    for(let i=0; i<array.length; i++){
        if(array[i]%5 === 0){
            return array[i];
        }
    }
}

console.log(printMultipleOfFive1([7, 4, 10, 7, 5, 3])) // 10
console.log(printMultipleOfFive1([7, 5, 10, 7, 15, 3])) // 5
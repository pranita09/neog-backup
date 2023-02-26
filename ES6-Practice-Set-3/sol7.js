// Question
// Write a function to return the last 5 characters as an array from the given array.

const printLastFive = ([first, second, ...lastFiveCharacters]) => lastFiveCharacters;
// used rest operator but here we know the length of array. What if we don't know length?

const printLastFive1 = array => array.splice(array.length-5, array.length);
// used splice to get only last five elements regardsless the length of an array

const printLastFive2 = array =>{
    const lengthOfIndexesToPop = array.length - 2;
    let newArrayWithLastFiveCharacters = [];
    for(let i=0; i<lengthOfIndexesToPop; i++){
        newArrayWithLastFiveCharacters.push(array.pop());
    }
    return newArrayWithLastFiveCharacters.reverse();
}
// another but a bit complex approach => used 3 built in functions. not recommended


console.log(printLastFive1([0, 1, 1, 2, 3, 5, 8]));
// [1, 2, 3, 5, 8]
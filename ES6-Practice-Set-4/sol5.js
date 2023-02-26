// Question
// Write an ES6 function that takes an array of strings and returns a new array with each string capitalized.

const capitalizeWords = array => {
    let newArray = [];
    for(let i=0; i<array.length; i++){
        newArray[newArray.length] = array[i].toUpperCase();
    }
    return newArray;
}

console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]));
// ["EAT", "SLEEP", "CODE", "REPEAT"]

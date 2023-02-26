// Question
// write an ES6 function that takes an array of words and returns an array with all its elements whose length is greater than 5.

const filterWords = arrayOfWords => {
    let newArrayOfWords = [];
    for(let i=0; i<arrayOfWords.length; i++){
        if(arrayOfWords[i].length > 5){
            newArrayOfWords[newArrayOfWords.length] = arrayOfWords[i];
        }
    }
    return newArrayOfWords;
}

// in the if loop if we just do this: newArrayOfWords += arrayofWords[i]
// it will just concat all the elements we are entering after the checking condition.
// like this: repeatcommunity

// so that's why we are appending each element to the last of the array ie. at .length's position 

var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
console.log(filterWords(words)) // ["repeat", "community"]

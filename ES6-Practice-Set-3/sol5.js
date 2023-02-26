// Question
// Convert the following code to ES6+ syntax with minimum number of characters.

function startsWithA1(str) {
    if(str.charAt(0) === 'A'){
        return true;
    }else{
        return false
    }
}

const startsWithA = str => str.charAt(0) === "A";
  
console.log(startsWithA("Akshita"))
// true
console.log(startsWithA("Jeena"))
// false
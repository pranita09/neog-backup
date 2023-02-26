// Question
// Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.

// const checkForAlphabetA1 = str => (str.includes("A") || str.includes("a")) ? `includes a` : `Does not include a`;

const checkForAlphabetA1 = str => (str.toUpperCase()).includes("A") ? `includes a` : `Does not include a`;

console.log(checkForAlphabetA("Tanay"));
console.log(checkForAlphabetA("Jeep"));
console.log(checkForAlphabetA("Jane"));
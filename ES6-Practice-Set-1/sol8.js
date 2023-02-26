// Question
// Write a function that takes a string as input and determines if it contains the word "hello".

// const isHelloPresent = str => (str.includes("hello") || str.includes("Hello")) ? true : false ;

const isHelloPresent = str => (str.toUpperCase()).includes("HELLO");

console.log(isHelloPresent("Hello World"));
console.log(isHelloPresent("World"));
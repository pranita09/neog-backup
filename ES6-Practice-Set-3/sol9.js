// Question
// Write an ES6 function to return the second element of the given array by adding “Hello” before it.

const sayHello = ([first, second]) => `Hello ${second}`;

console.log(sayHello(["Akshay", "Sweta", "Prerana", "Vinay"]))
// Hello Sweta

console.log(sayHello(["Kanika", "Rakesh", "Prerana", "Puja"]))
// Hello Rakesh
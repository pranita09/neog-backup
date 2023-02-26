// Question
// Create a function that takes an array of strings as an argument and returns a string that includes the number of items in the array and the first and last items.

const formatArray = array => `The array has ${array.length} items, and the first item is "${array[0]}", and the last item is "${array[array.length-1]}".`

const items = ['apple', 'banana', 'orange'];
const message = formatArray(items);
console.log(message);
// The array has 3 items, and the first item is "apple", and the last item is "orange".
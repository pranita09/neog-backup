// Question
// Create an object book with properties title, author, and pages. Create a function getBookDetails that takes a book object as a parameter and returns if the book has more than 100 pages.

const book = {
    title: "Yayati",
    author: "V S Khandekar",
    pages: 700
}

// const getBookDetails = obj => obj.pages>100 ? true : false;

const getBookDetails = obj => obj.pages>100;

console.log(getBookDetails(book)); // logs 'true' if the pages are above 100
console.log(getBookDetails(book)); // logs 'false' if the pages are 100 or below
// Question
// Write an ES6 function that takes an array of objects containing book information (title, author, genre) and returns an array with only the books of "Science Fiction".

const filterByGenre1 = arrayOfBooks => arrayOfBooks.filter(book => book.genre === "Science Fiction");

const genreOfScienceFiction = book => book.genre === "Science Fiction";
const filterByGenre2 = arrayOfBooks => arrayOfBooks.filter(genreOfScienceFiction);

const filterByGenre = arrayOfBooks => arrayOfBooks.filter(({genre}) => genre === "Science Fiction");  // using destructuring

const books = [
    {title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction"},
    {title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction"},
    {title: "1984", author: "George Orwell", genre: "Science Fiction"},
    {title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance"}
  ];
  
  const filteredBooks = filterByGenre(books, "Science Fiction");
  console.log(filteredBooks);
  // Output: [{title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction"}, {title: "1984", author: "George Orwell", genre: "Science Fiction"}]
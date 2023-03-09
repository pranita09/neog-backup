// Question
// Write an ES6 function that takes an array of objects representing books with properties title, author and pageCount. Return the all book titles that have more than 700 pages.

const books = [
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", pageCount: 193 },
    { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
];
  
// Your code here
const getTitlesWithMoreThan500Pages1 = arrayOfBooks => arrayOfBooks.filter(({pageCount}) => pageCount > 700).map(({title}) => title);

// alternative using reduce only
const getTitlesWithMoreThan500Pages2 = arrOfBooks => arrOfBooks.reduce((acc, {title, pageCount})=>{
    if(pageCount > 700){
      acc[acc.length] = title;     // acc.push(title);
      return acc;
    }else{
      return acc;
    }
  }, [])

//alternate
const getTitlesWithMoreThan500Pages = arrOfBooks => arrOfBooks.reduce((acc, {title, pageCount})=>pageCount>700 ? [...acc, title] : acc,[])


const booksWithMoreThan500Pages = getTitlesWithMoreThan500Pages(books);
console.log(booksWithMoreThan500Pages); 
// Output: ["The Lord of the Rings"]
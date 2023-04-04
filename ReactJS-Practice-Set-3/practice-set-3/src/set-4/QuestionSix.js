import { useState } from "react";

const BooksByGenre = ({ booksData }) => {
  const [bookGenre, setBookGenre] = useState("");

  const allGenres = booksData.reduce((acc, curr) => {
    if (!acc.includes(curr.genre)) {
      acc[acc.length] = curr.genre;
    }
    return acc;
  }, []);

  const filteredBooks = bookGenre
    ? booksData.filter(({ genre }) => genre === bookGenre)
    : booksData;
  // console.log(filteredBooks);

  return (
    <div>
      <div>
        <button onClick={() => setBookGenre(null)}>All Genres</button>
        {allGenres.map((genre, index) => (
          <button id={index} onClick={() => setBookGenre(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <ul style={{ listStyle: "none" }}>
        {filteredBooks.map(({ id, title, author }) => (
          <li key={id}>
            <h3>{title}</h3>
            <p>{author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksByGenre;

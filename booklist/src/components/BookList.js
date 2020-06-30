import React, { useContext, useEffect } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { books } = useContext(BookContext);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  });

  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empety">No books to read. Hello free trime</div>
  );
};

export default BookList;

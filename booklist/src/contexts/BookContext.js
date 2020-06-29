import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Parasite", id: 1, author: "Bob Esponja" },
    { title: "12 Monkeys", id: 2, author: "Patick Estrela" },
    { title: "The prinche of tides", id: 3, author: "Sindy" },
    { title: "Her", id: 4, author: "Lula Molusco" },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return <BookContext.Provider value={{ books, addBook, removeBook }}>{props.children}</BookContext.Provider>;
};
export default BookContextProvider;

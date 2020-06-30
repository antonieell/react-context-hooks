import React, { createContext, useState, useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const data = localStorage.getItem("books");
    return data ? JSON.parse(data) : [];
  });

  return <BookContext.Provider value={{ books, dispatch }}>{props.children}</BookContext.Provider>;
};
export default BookContextProvider;

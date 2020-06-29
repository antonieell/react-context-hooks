import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books] = useState([
    { title: "Parasite", id: 1 },
    { title: "12 Monkeys", id: 2 },
    { title: "The prinche of tides", id: 3 },
    { title: "Her", id: 4 },
  ]);
  return <BookContext.Provider value={{ books }}>{props.children}</BookContext.Provider>;
};

export default BookContextProvider;

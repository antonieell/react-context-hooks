import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForms = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_BOOK", book: { title, author } });
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input required placeholder="Book title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input
        required
        placeholder="Book Author"
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input value="Add a new book" type="submit"></input>
    </form>
  );
};

export default NewBookForms;

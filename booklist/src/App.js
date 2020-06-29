import React from "react";
import BookContextProvider from "./contexts/BookContext";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import NewBookForms from "./components/BookForms";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar></Navbar>
        <BookList></BookList>
        <NewBookForms></NewBookForms>
      </BookContextProvider>
    </div>
  );
}

export default App;

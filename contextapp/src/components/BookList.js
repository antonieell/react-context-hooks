import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        <li style={{ background: theme.ui }}>Parasite</li>
        <li style={{ background: theme.ui }}>12 Monkeys</li>
        <li style={{ background: theme.ui }}>Her</li>
      </ul>
    </div>
  );
};

export default BookList;

import React from "react";
import { BookControls } from "./BookControls";

export const BookCard = ({ book, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>
      <img
        src={`https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w200-h300`}
        alt={`${book.title} Постер`}
      />
      <BookControls type={type} book={book} />
    </div>
  );
};

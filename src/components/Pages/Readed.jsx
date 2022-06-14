import React, { useContext } from "react";
import { GlobalContext } from "context/GlobalState";
import { BookCard } from "./BookCard";
import  {useAuth} from "context/UserAuth";
import {Navigate} from 'react-router-dom'

const Readed = () => {
  const { readed } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Прочитанные книги</h1>

          <span className="count-pill">
            {readed.length} {readed.length === 1 ? "Книга" : "Книг"}
          </span>
        </div>

        {readed.length > 0 ? (
          <div className="movie-grid">
            {readed.map((book) => (
              <BookCard book={book} key={book.id} type="readed" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">У тебя нет книг, добавь их!</h2>
        )}
      </div>
    </div>
  )
};

export {Readed}

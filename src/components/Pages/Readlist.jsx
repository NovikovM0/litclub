import React, { useContext } from "react";
import { GlobalContext } from "context/GlobalState";
import { BookCard } from "./BookCard";
import  {useAuth} from "context/UserAuth";
import {Navigate} from 'react-router-dom'

const Readlist = () => {
  const { readlist } = useContext(GlobalContext);

  let  tmp = '';
  let count = readlist.length;
  if( (count % 10 === 1) && (count % 100 !== 11))
  {
    tmp = count + ' Книга';
  }
  else if (((count % 10 === 2) && (count % 100 !== 12)) || ((count % 10 === 3) && (count % 100 !== 13)) || ((count % 10 === 4) && (count % 100 !== 14))) 
  {
    tmp = count + ' Книги';
  }
  else
  {
    tmp = count + ' Книг';
  }

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Мой список книг</h1>

          <span className="count-pill">
            {tmp}
          </span>
        </div>  

        {readlist.length > 0 ? (
          <div className="movie-grid">
            {readlist.map((book) => (
              <BookCard book={book} key={book.id} type="readlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">У тебя нет книг, добавь их!</h2>
        )}
      </div>
    </div>
  )
};

export {Readlist}

import React, { useContext } from "react";
import { GlobalContext } from "context/GlobalState";

export const BookControls = ({ type, book }) => {
  const {
    removeBookFromReadlist,
    addBookToReaded,
    moveToReadlist,
    removeFromReaded,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "readlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addBookToReaded(book)}>
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeBookFromReadlist(book.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "readed" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToReadlist(book)}>
            <i className="fa-fw far fa-eye-slash"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromReaded(book.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};

import React, { useContext } from "react";
import { GlobalContext } from "context/GlobalState";
import {  useNavigate  } from "react-router-dom";

export const ResultCard = ({ book }) => {
  const {
    addBookToReadlist,
    addBookToReaded,
    readlist,
    readed,
  } = useContext(GlobalContext);

  let navigate = useNavigate();
  let storedBook = readlist.find((o) => o.id === book.id);
  let storedBookReaded = readed.find((o) => o.id === book.id);

  const readlistDisabled = storedBook
    ? true
    : storedBookReaded
    ? true
    : false;

  const readedDisabled = storedBookReaded ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
      {/* <Link to={{ pathname: '/main/' + book.id,}}> */}
        <div>
        {book?.volumeInfo?.imageLinks?.thumbnail ? ( <img className='resultImg' onClick={
          () => navigate({
            pathname: '/main',
            search: `?id=${book.id}`,
            state: { detail: 'some_value' }
          })
          
          // () => setBook(book.id)
        }
            src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`}
            alt={`${book.volumeInfo.title} Постер`}
          />  
        ) : ( <img className='resultImg' onClick={
          () => navigate({
            pathname: '/main',
            search: `?id=${book.id}`,
            state: { detail: 'some_value' }
          })}
            src={`https://www.hot-motor.ru/body/clothes/images/no_icon.png`}
            alt={`${book.volumeInfo.title} Постер`}
          />
          // <div className="filler-poster" />
        )}
        </div>
        {/* </Link> */}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{book.volumeInfo.title}</h3>
          <h4 className="release-date">
            {book.volumeInfo.authors}
          </h4>
        </div>

        <div className="controls">
          <button
            className="btncss"
            disabled={readlistDisabled}
            onClick={() => addBookToReadlist(book)}
          >
            Добавить в "Хочу прочитать"
          </button>

          <button
            className="btncss"
            disabled={readedDisabled}
            onClick={() => addBookToReaded(book)}
          >
            Добавить в "Прочитанное"
          </button>
        </div>
      </div>
    </div>
  );
};

import React, {useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {CommentSection} from "components/CommentSection";

const Main = () => {

  const [results, setResults] = useState({});
  const [isFirst, setIsFirst] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const useQuery = () => new URLSearchParams(useLocation().search);
  let navigate = useNavigate();
  const query = useQuery();
  let bookId = query.get('id');

  const [reader, setReader] = useState(false);
  const [buy, setBuy] = useState(false);
  const [download, setDownload] = useState(false);
    useEffect(()=> {
      if(isFirst)
      {
        fetch(
          `https://www.googleapis.com/books/v1/volumes/${bookId}`
        )
          .then((res) => res.json())
          .then((data) => {
            setResults(data);
            setIsReady(true);
          });
          setIsFirst(false);
      }
      setReader(!results?.accessInfo?.webReaderLink)
      setBuy(!results?.saleInfo?.buyLink)
      setDownload(!results?.accessInfo?.pdf?.downloadLink)
    }, [bookId, results, isFirst, setIsFirst, setResults])

  if (isReady)
  {

    return (
      <div className="movie-page">
        <div className="container">
          <div className="header">
            <h1 className="heading">Книга</h1>
          </div>
            <div className="movie-grid">
            <img
              src={`https://books.google.com/books/publisher/content/images/frontcover/${results.id}?fife=w200-h300`}
              alt={`${results.volumeInfo.title} Poster`}
            />  
            </div>
            <h3>{results?.volumeInfo?.description}</h3>
            <div>
            <button className="btn-main" onClick={
          () => navigate({
            pathname: '/chat',
            search: `?id=${results.id}`,
            state: { detail: 'some_value' }
          })}>
            Открыть чат
          </button>
            <button className="btn-main" disabled={reader} onClick={()=> window.open(`${results?.accessInfo?.webReaderLink}`, "_blank")}>
            Прочитать книгу
          </button>
          <button className={`btn-main`} disabled={buy} onClick={()=> window.open(`${results?.saleInfo?.buyLink}`, "_blank")}>
            Купить книгу
          </button>
          <button className={`btn-main`} disabled={download} onClick={()=> window.open(`${results?.accessInfo?.pdf?.downloadLink}`, "_blank")}>
            Скачать отрывок
          </button>
          </div>
        </div>
      </div>
    );
  }
};

export {Main}

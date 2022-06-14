import React, { useState } from "react";
import {Navigate} from 'react-router-dom'
import { ResultCard } from "./ResultCard";
import Form from 'react-bootstrap/Form'
import CloseButton from 'react-bootstrap/CloseButton'

const AddPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${e.target.value}&key=${process.env.REACT_APP_GB_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.totalItems > 0) {
          setResults(data.items);
        } else {
          setResults([]);
        }
      });
        };
      return (
        <>
        <div className="add-page">
          <div className="container">
            <div className="add-content">
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Найти книгу"
                  value={query}
                  onChange={onChange}
                />
              </div>
              {
                <ul className="results">
                  {results.map((book) => (
                    <li key={book.id}>
                      <ResultCard book={book} />
                    </li>
                  ))}
                </ul>
              }
            </div>
          </div>
        </div>
        </>
      )
};

export {AddPage}

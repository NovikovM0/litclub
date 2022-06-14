import React,{ useState, createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  readlist: localStorage.getItem("readlist")
    ? JSON.parse(localStorage.getItem("readlist"))
    : [],
  readed: localStorage.getItem("readed")
    ? JSON.parse(localStorage.getItem("readed"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [modalActive, setModalActive] = useState(true)
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("readlist", JSON.stringify(state.readlist));
    localStorage.setItem("readed", JSON.stringify(state.readed));
  }, [state]);

  const addBookToReadlist = (book) => {
    dispatch({ type: "ADD_BOOK_TO_READLIST", payload: book });
  };

  const removeBookFromReadlist = (id) => {
    dispatch({ type: "REMOVE_BOOK_FROM_READLIST", payload: id });
  };

  const addBookToReaded = (book) => {
    dispatch({ type: "ADD_BOOK_TO_READED", payload: book });
  };

  const moveToReadlist = (book) => {
    dispatch({ type: "MOVE_TO_READLIST", payload: book });
  };

  const removeFromReaded = (id) => {
    dispatch({ type: "REMOVE_FROM_READED", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        readlist: state.readlist,
        readed: state.readed,
        addBookToReadlist,
        removeBookFromReadlist,
        addBookToReaded,
        moveToReadlist,
        removeFromReaded,
        modalActive,
        setModalActive,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default (state, action) => {
  switch (action.type) {
    case "ADD_BOOK_TO_READLIST":
      return {
        ...state,
        readlist: [action.payload, ...state.readlist],
      };
    case "REMOVE_BOOK_FROM_READLIST":
      return {
        ...state,
        readlist: state.readlist.filter(
          (book) => book.id !== action.payload
        ),
      };
    case "ADD_BOOK_TO_READED":
      return {
        ...state,
        readlist: state.readlist.filter(
          (book) => book.id !== action.payload.id
        ),
        readed: [action.payload, ...state.readed],
      };
    case "MOVE_TO_READLIST":
      return {
        ...state,
        readed: state.readed.filter(
          (book) => book.id !== action.payload.id
        ),
        readlist: [action.payload, ...state.readlist],
      };
    case "REMOVE_FROM_READED":
      return {
        ...state,
        readed: state.readed.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};

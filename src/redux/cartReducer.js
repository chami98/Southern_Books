const _initState = {
  selectedBooks: [],
};

export const cartReducer = (state = _initState, action) => {
  switch (action?.type) {
    case "ADD_CURRENT_BOOK_TO_THE_CART": {

      const bookObj = {
        ...action.payload.selectedBook,
        selectedBookQty: action.payload.selectedBookQty,
      };

      const selectedBooks = [...state.selectedBooks, bookObj];

      return {
        ...state,
        selectedBooks: selectedBooks,
      };
    }

    default:
      return state;
  }
};

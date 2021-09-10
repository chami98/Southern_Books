const _initState = {
  selectedBooks: [],
};

export const cartReducer = (state = _initState, action) => {
  switch (action?.type) {
    case "ADD_CURRENT_BOOK_TO_THE_CART": {

      
      const index = state.selectedBooks.findIndex((book) => {
        return book.id == action.payload.selectedBook.id;
      });

      let selectedBooksCopy = [...state.selectedBooks];

      if (index != -1) {
        selectedBooksCopy[index] = {
          ...selectedBooksCopy[index],
          selectedBookQty: selectedBooksCopy[index].selectedBookQty + action.payload.selectedBookQty,
        }

      } else {
        const bookObj = {
          ...action.payload.selectedBook,
          selectedBookQty: action.payload.selectedBookQty,
        };

        selectedBooksCopy = [...selectedBooksCopy , bookObj]
      }

      // cart ekata book ekak add kalama danatamath selectedbooks array eke a book eka thiyenawanam
      //-----------> e book eke selectedBookQty eke qty ekata payload eke qty eka + karanna  natnam
      //-----------> selectedbook walata payload eke ewapu  book eka add karanna

      return {
        ...state,
        selectedBooks: selectedBooksCopy,
      };
    }

    default:
      return state;
  }
};

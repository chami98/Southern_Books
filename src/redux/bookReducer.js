const _initState = {
  currentBook: {},
  loading: false,
  responseErrorCode: null,
  currentBookQty: null
};

export const bookReducer = (state = _initState, action) => {
  switch (action?.type) {
    case "GET_BOOK_BY_ID": {
      return {
        ...state,
        loading: true,
      };
    }

    case "GET_BOOK_BY_ID_SUCCESS": {
      return {
        ...state,
        currentBook: action.payload,
        loading: false,
        responseErrorCode: null,
      };
    }

    case "GET_BOOK_BY_ID_FAILED": {
      return {
        ...state,
        loading: false,
        responseErrorCode: action.payload.statusCode,
      };
    }

    case "SET_CURRENT_BOOK_QUANTITY": {
      return {
        ...state,
        currentBookQty: action.payload.currentBookQty,
      };
    }

    case "ADD_CURRENT_BOOK_TO_THE_CART": {


      console.log('state.currentBook', state.currentBook);

      return {
        ...state,
        currentBook : {
          ...state.currentBook,
          availableQuantity : state.currentBook.availableQuantity - action.payload.selectedBookQty,
        }
      };
    }

    default:
      return state;
  }
};

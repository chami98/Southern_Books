const _initState = {
  currentBook: {},
  loading: false,
  responseErrorCode: null,
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
        responseErrorCode: null
      };
    }

    case "GET_BOOK_BY_ID_FAILED": {
      return {
        ...state,
        loading: false,
        responseErrorCode: action.payload.statusCode
      };
    }

    default:
      return state;
  }
};

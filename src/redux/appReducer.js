const _initState = {
  name: "saman",
  categories: [],
  count: 0,
  books: [],
  booksLoading: false,
  searchString: "",
  currentBook: {},
};

export const appReducer = (state = _initState, action) => {
  switch (action?.type) {
    case "ADD_NEW_COUNT": {
      return {
        ...state,
        count:  action.payload.count, // 0 + 1 // 1 + 2 
      };
    }

    case "DECREMENT" : {
        return {
            ...state,
            count : state.count -1,
        }
    }

    case "SET_CATEGORIES" : {
        return {
          ...state,
          categories : action.payload.categories,
          selectedCategoryId : action.payload.categories[0].id,
        }
    }

    case "SET_CATEGORY_ID" : {
      return {
        ...state,
        selectedCategoryId : action.payload
      }
  }

    case "SET_BOOKS" : {
      return {
        ...state,
        books : action.payload.books
      }
    }

    case "BOOKS_LOADING" : {
      return {
        ...state,
        booksLoading: action.payload
      }
    }

    case "BOOKS_LOADING_FINISHED" : {
      return {
        ...state,
        booksLoading: false
      }
    }

    case "SET_SEARCH_STRING" : {
      return {
        ...state,
        searchString : action.payload
      }
    }

    default:
      return state;
  }
};
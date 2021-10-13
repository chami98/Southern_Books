const _initState = {
    books: [],
};

export const employeeReducer = (state = _initState, action) => {
  switch (action?.type) {
    case "SET_BOOKS_TO_EMPLOYEE_COMPONANT": {
      return {
        ...state,
        books: action.payload.books,
      };
    }

    default:
      return state;
  }
};

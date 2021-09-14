const _initState = {
  userDetails: { user: {}, claims: {} },
  loggedIn: false,
};

export const userReducer = (state = _initState, action) => {
  switch (action?.type) {
    case "USER_SIGN_IN": {
      return {
        ...state,
        userDetails: { ...action.payload },
        loggedIn: true,
      };
    }

    case "USER_SIGN_OUT": {
      return {
        ...state,
        userDetails: _initState.userDetails,
        loggedIn: false,
      };
    }

    default:
      return state;
  }
};

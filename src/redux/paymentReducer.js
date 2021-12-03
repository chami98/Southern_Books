const _initState = {
  // should be false
  show: false,
  loading: false,
  amount : 1000,
};

export const paymentReducer = (state = _initState, action) => {
  switch (action?.type) {
    case "INITIATE_PAYMENT": {
      return {
        ...state,
        show : true,
        amount: action.payload.amount,
        callBack : action.payload.callBack,
      };
    }

    case "START_PAYMENT": {
      return {
        ...state,
        laoding : true,
      };
    }

    case "END_PAYMENT": {
      return {
        ...state,
        laoding : false,
        show: false,
      };
    }

    case "CANCLE_PAYMENT": {
      return {
        ...state,
        laoding : false,
        show: false,
        amount: 0,
      };
    }

    default:
      return state;
  }
};

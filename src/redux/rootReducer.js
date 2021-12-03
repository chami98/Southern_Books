import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { bookReducer } from "./bookReducer";
import { cartReducer } from "./cartReducer";
import { userReducer } from "./userReducer";
import { paymentReducer } from "./paymentReducer";


export const rootReducer = combineReducers({
  app: appReducer,
  book: bookReducer,
  cart: cartReducer,
  user: userReducer,
  payment: paymentReducer,
});

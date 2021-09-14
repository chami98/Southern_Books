import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { chamiReducer } from "./chamiReducer";
import { bookReducer } from "./bookReducer";
import { cartReducer } from "./cartReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  app: appReducer,
  chami: chamiReducer,
  book: bookReducer,
  cart: cartReducer,
  user: userReducer,
});

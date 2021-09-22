import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { bookReducer } from "./bookReducer";
import { cartReducer } from "./cartReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  app: appReducer,
  book: bookReducer,
  cart: cartReducer,
  user: userReducer,
});

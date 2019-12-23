import { combineReducers } from "redux";

import Userreducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer";

const Rootreducer = combineReducers({
  user: Userreducer,
  cart: CartReducer
});

export default Rootreducer;

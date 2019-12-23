import { cartactiontype } from "./cart.types";

const INITIAL_STATE = {
  hiddne: true,
  cartItem: []
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartactiontype.TOGGLE_CARD_HIDDNE:
      return {
        ...state,
        hiddne: !state.hiddne
      };
    default:
      return state;
  }
};

export default CartReducer;

import { Useractiontypes } from "./user.types";

const INITIONAL_STATE = {
  currentUser: null
};

const Userreducer = (state = INITIONAL_STATE, action) => {
  switch (action.type) {
    case Useractiontypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default Userreducer;

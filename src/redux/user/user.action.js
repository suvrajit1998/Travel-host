import { Useractiontypes } from "./user.types";

export const setcurrentuser = user => ({
  type: Useractiontypes.SET_CURRENT_USER,
  payload: user
});

import { createStore, applyMiddleware } from "redux";

import Rootreducer from "./root-reducer";

import logger from "redux-logger";

const middleware = [logger];

export const stor = createStore(Rootreducer, applyMiddleware(...middleware));

/**
 * Redux store configuration
 * @redux
 */

import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";

/**
 * local reducers
 * @reducers
 */
import { todoReducer } from "./reducers/todo";

/**
 * Redux store
 * @redux
 */
const store = createStore(
  combineReducers({ todoReducer }),
  applyMiddleware(thunk)
);

export default store;

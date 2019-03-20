/**
 * Redux store configuration
 * @redux
 */

import thunk from "redux-thunk";
import { apiMiddleware } from "redux-api-middleware";
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
  composeWithDevTools(applyMiddleware(thunk, apiMiddleware))
);

export default store;

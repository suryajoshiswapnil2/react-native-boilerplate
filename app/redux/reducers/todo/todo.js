/**
 * Reducer todo
 * @reducer
 */

import { TODO, ADD } from "./types";

/**
 * Initial state for todo reducer
 * @constant
 */

const initialState = {};

/**
 * todo reducer function that return new state according to actions
 * @function
 * @param {object} state Initial state
 * @param {object} action action containing type and payload
 */
const todoReducer = (state = initialState, action = {}) => {
  const { type, data } = action;

  switch (type) {
    case TODO:
      return { data };
    case ADD:
      return { ...state, ...data };
    default:
      return state;
  }
};

export default todoReducer;

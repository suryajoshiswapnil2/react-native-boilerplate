/**
 * Actions to be used to interact with redux reducers
 * @function
 */

import { TODO } from "./types";

/**
 * add new todo action
 * @function
 * @param {any} data
 */
export const addTodo = data => {
  return {
    type: TODO,
    data
  };
};

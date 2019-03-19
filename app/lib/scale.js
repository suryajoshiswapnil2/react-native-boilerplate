/**
 * Utility functions to scale size with respect to device dimensions
 * @function
 */

import { width, height } from "../lib/device";

/**
 *
 * Reference base dimensions of iPhone 5s
 * @baseWidth
 * @baseHeight
 *
 */
const baseWidth = 320;
const baseHeight = 568;

/**
 *
 * scale the size with respect to base width of iPhone 5s
 * @function
 * @param {number} size - size to be scaled
 *
 */
function scale(size) {
  return (width / baseWidth) * size;
}

/**
 *
 * scale with respect to base height of iPhone 5s
 * @function
 * @param {number} size - size to be scaled
 *
 */
function verticalScale(size) {
  return (height / baseHeight) * size;
}

/**
 *
 * scale the size with respect to base width and height of iPhone 5s
 * With additional hack to deal with devices having lower resolutions than iPhone 5s
 * @function
 * @param {number} size - size to be scaled
 * @param {number} factor @default {0.5} - referenced factor
 *
 */
function moderateScale(size, factor = 0.5) {
  return (
    size + (scale(size) - size) * factor - (width < 340 && height < 588 ? 1 : 0)
  );
}

/**
 *
 * Shorter versions of code using arrow functions
 *
 * const scale = size => (width / baseWidth) * size;
 * const verticalScale = size => (height / baseHeight) * size;
 * const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor - (width < 340 && height < 588 ? 1 : 0);
 *
 */

export { scale, verticalScale, moderateScale };

/**
 * Device related constants
 * @device
 * @constant
 */

import { Platform, Dimensions } from "react-native";

/**
 * Device resolution consisting of width and height
 * @constant
 */
const resolution = Dimensions.get("window");

/**
 * Device width, height and operating system
 * @constant
 */
const os = Platform.OS;
const width = resolution.height;
const height = resolution.height;

/**
 * Device type
 * @constant @type
 */
const isIPhoneX = height === 812 ? true : false;
const isSmallDevice = width < 350 && height < 600 ? true : false;

export { resolution, os, width, height, isIPhoneX, isSmallDevice };

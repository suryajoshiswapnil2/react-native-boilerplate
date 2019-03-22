/**
 * Routes for your application
 * @routes
 */
import { createStackNavigator, createAppContainer } from "react-navigation";

/**
 * UI screens
 * @screen
 */
import Home from "./pages/home";

/**
 * Root navigation stack
 * @navigator
 */
const rootStack = createStackNavigator({ Home }, { initialRouteName: "Home" });

export default createAppContainer(rootStack);

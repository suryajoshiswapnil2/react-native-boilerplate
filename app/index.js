/**
 * Routes for your application
 * @routes
 */
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";

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

/**
 * Tab Navigator
 * @navigator
 */
const TabNavigator = createBottomTabNavigator({
  Home: rootStack,
  Settings: rootStack,
  Help: rootStack,
  Contact: rootStack
});

/**
 * Drawer Navigator
 * @navigator
 */
const DrawerNavigator = createDrawerNavigator({
  Home: { screen: TabNavigator }
});

export default createAppContainer(DrawerNavigator);

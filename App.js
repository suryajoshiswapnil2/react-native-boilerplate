/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/**
 * Entry point for app
 * @app
 */

import React from "react";

import store from "./app/redux";
import { Provider } from "react-redux";

import AppContainer from "./app/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.navigator = null;
  }

  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <AppContainer ref={nav => (this.navigator = nav)} />
      </Provider>
    );
  }
}

export default App;

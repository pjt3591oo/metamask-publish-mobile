import './global';
import React from 'react';

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import thunk from "redux-thunk";
import Reducer from "./src/store";

import AppNavigator from "./src/navigators/AppNavigator";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  Reducer, 
  composeEnhancers(applyMiddleware(thunk)),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
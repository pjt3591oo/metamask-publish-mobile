import './global';
import React from 'react';

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import thunk from "redux-thunk";
import Reducer from "./src/store";

import AppNavigator from "./src/navigators/AppNavigator";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import Web3 from 'web3'
let web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io'));
window.web3 = web3

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
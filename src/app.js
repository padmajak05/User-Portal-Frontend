import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import reducer from './Reducers';
import { BrowserRouter } from 'react-router-dom';

import Routes from "./routers";

const store = createStore(reducer, applyMiddleware(thunk));
const App = () => {
  return <Provider store={store}><BrowserRouter><Routes /></BrowserRouter></Provider>;
};

ReactDOM.render(<App />, document.getElementById("index"));
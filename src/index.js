import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

//
//  Redux

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

import adminReducer from "./reducers/adminReducer";

const storeInstance = createStore(
  combineReducers({ adminReducer }),
  applyMiddleware(logger)
);

//
//  Render

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

//  redux needs to hold inputs to allow for future edits.
//  submit at review view, next buttons just advance to next view
//  on review screen use router to redirect user to the view they want to edit (feeling, understanding, ss, comments)
//  server needs routing and pool setup
//  ss in this project is "staff support" not the german abbr.

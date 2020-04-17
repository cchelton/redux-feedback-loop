import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

//  redux needs to hold inputs to allow for future edits.
//  submit at review view, next buttons just advance to next view
//  on review screen use router to redirect user to the view they want to edit (feeling, understanding, ss, comments)
//  server needs routing and pool setup
//  ss in this project is "staff support" not the german abbr.

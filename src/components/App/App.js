import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import PageFeeling from "./views/PageFeeling/PageFeeling";
import PageUnderstanding from "./views/PageUnderstanding/PageUnderstanding";
import PageStaffSupport from "./views/PageStaffSupport/PageStaffSupport";
import PageComments from "./views/PageComments/PageComments";
import PageReview from "./views/PageReview/PageReview";
import PageThanks from "./views/PageThanks/PageThanks";
import PageAdmin from "./views/PageAdmin/PageAdmin";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4>
              <i>Don't forget it!</i>
            </h4>
          </header>
          <div>
            <Route exact path="/" component={PageFeeling} />
            <Route path="/understanding" component={PageUnderstanding} />
            <Route path="/support" component={PageStaffSupport} />
            <Route path="/comments" component={PageComments} />
            <Route path="/review" component={PageReview} />
            <Route path="/thanks" component={PageThanks} />
            <Route path="/admin" component={PageAdmin} />
          </div>
          <br />
        </Router>
      </div>
    );
  }
}

export default App;

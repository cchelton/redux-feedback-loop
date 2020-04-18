import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";

class SubmitButton extends Component {
  postFeedback = () => {
    const newFeedback = this.props.store.newFeedbackReducer;

    //
    //  SERVER API CALLS

    axios
      .post("/feedback", newFeedback)
      .then((response) => {
        this.props.dispatch({
          type: "RESET_NEW_FEEDBACK",
        }); //  clear the reducer on successful submit
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //
  //  EVENT HANDLER

  handleClickNext = () => {
    this.postFeedback();
    this.props.history.push("/thanks");
  };

  //
  //  RENDER

  render() {
    const nextPath = this.props.nextPath;

    return (
      <button
        onClick={() => {
          this.handleClickNext(nextPath);
        }}
      >
        Submit
      </button>
    );
  }
}

const putStoreOnProps = (store) => ({
  store,
});

export default withRouter(connect(putStoreOnProps)(SubmitButton));

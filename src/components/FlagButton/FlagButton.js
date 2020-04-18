import React, { Component } from "react";
import Axios from "axios";

class FlagButton extends Component {
  flagFeedbackSubmission = (id) => {
    Axios.put(`feedback/flag/${id}`)
      .then((response) => {
        this.props.getFeedbackSubmissions();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <button
        onClick={() => {
          this.flagFeedbackSubmission(this.props.id);
        }}
      >
        {this.props.flagged}
      </button>
    );
  }
}

export default FlagButton;

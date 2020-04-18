import React, { Component } from "react";
import axios from "axios";

class FlagButton extends Component {
  //
  //  SERVER API CALL / EVENT HANDLER

  /**
   * Toggles the flagged status on a feedback entry.
   *
   * @param {number} id the database ID of the entry to toggle flag.
   */
  flagFeedbackSubmission = (id) => {
    axios
      .put(`feedback/flag/${id}`)
      .then((response) => {
        this.props.getFeedbackSubmissions();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //
  //  RENDER

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

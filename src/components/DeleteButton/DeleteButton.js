import React, { Component } from "react";
import { Button } from "@material-ui/core";
import axios from "axios";

class DeleteButton extends Component {
  //
  //  SERVER API CALL / EVENT HANDLER

  /**
   * Deletes a feedback entry from database.
   * @param {number} id the id of the table row. from delete button props
   */
  deleteFeedbackSubmission = (id) => {
    axios
      .delete(`/feedback/delete/${id}`)
      .then((response) => {
        console.log(response);
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
      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={() => {
          this.deleteFeedbackSubmission(this.props.id);
        }}
      >
        Delete
      </Button>
    );
  }
}

export default DeleteButton;

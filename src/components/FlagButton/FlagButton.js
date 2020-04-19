import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import FlagIcon from "@material-ui/icons/Flag";
import FlagOutlined from "@material-ui/icons/FlagOutlined";
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
    // return (
    //   <Button
    //     variant="contained"
    //     color="primary"
    //     size="small"
    //     onClick={() => {
    //       this.flagFeedbackSubmission(this.props.id);
    //     }}
    //   >
    //     {this.props.flagged}
    //   </Button>
    // );

    return (
      <Checkbox
        checked={this.props.flagged}
        icon={<FlagOutlined />}
        checkedIcon={<FlagIcon />}
        color="primary"
        onChange={() => {
          this.flagFeedbackSubmission(this.props.id);
        }}
      />
    );
  }
}

export default FlagButton;

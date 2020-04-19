// single purpose button, do not submit, just advance. let redux hold inputs until submit
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

class NextButton extends Component {
  //
  //  EVENT HANDLERS
  handleClickNext = (path) => {
    if (this.props.pageVal !== "") {
      this.props.history.push(path);
    } else {
      alert("This field is required");
    }
  };

  //
  //  RENDER

  render() {
    const nextPath = this.props.nextPath;

    return (
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          this.handleClickNext(nextPath);
        }}
      >
        Next
      </Button>
    );
  }
}

export default withRouter(NextButton);

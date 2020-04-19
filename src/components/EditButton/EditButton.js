import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

class EditButton extends Component {
  handleClick = () => {
    this.props.history.push(this.props.sectionPath);
  };
  render() {
    return (
      <Button variant="contained" color="primary" onClick={this.handleClick}>
        Edit
      </Button>
    );
  }
}

export default withRouter(EditButton);

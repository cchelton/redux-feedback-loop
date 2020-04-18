import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class EditButton extends Component {
  handleClick = () => {
    this.props.history.push(this.props.sectionPath);
  };
  render() {
    return <button onClick={this.handleClick}>Edit</button>;
  }
}

export default withRouter(EditButton);

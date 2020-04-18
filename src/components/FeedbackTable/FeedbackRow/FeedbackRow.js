import React, { Component } from "react";

class FeedbackRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.feeling}</td>
        <td>{this.props.understanding}</td>
        <td>{this.props.support}</td>
        <td>{this.props.comments}</td>
        <td>{this.props.flagged.toString()}</td>
        <td>DELETE</td>
      </tr>
    );
  }
}

export default FeedbackRow;

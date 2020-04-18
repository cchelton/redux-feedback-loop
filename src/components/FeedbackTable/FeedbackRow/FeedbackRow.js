import React, { Component } from "react";
import DeleteButton from "../../DeleteButton/DeleteButton";
import FlagButton from "../../FlagButton/FlagButton";

class FeedbackRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.feeling}</td>
        <td>{this.props.understanding}</td>
        <td>{this.props.support}</td>
        <td>{this.props.comments}</td>
        <td>
          <FlagButton
            getFeedbackSubmissions={this.props.getFeedbackSubmissions}
            id={this.props.id}
            flagged={this.props.flagged.toString()}
          />
        </td>
        {/* <td>{this.props.flagged.toString()}</td> */}
        <td>
          <DeleteButton
            getFeedbackSubmissions={this.props.getFeedbackSubmissions}
            id={this.props.id}
          />
        </td>
      </tr>
    );
  }
}

export default FeedbackRow;

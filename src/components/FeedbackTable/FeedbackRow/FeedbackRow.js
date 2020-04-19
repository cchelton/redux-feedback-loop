import React, { Component } from "react";
import DeleteButton from "../../DeleteButton/DeleteButton";
import FlagButton from "../../FlagButton/FlagButton";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

class FeedbackRow extends Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.feeling}</TableCell>
        <TableCell>{this.props.understanding}</TableCell>
        <TableCell>{this.props.support}</TableCell>
        <TableCell>{this.props.comments}</TableCell>
        <TableCell>
          <FlagButton
            getFeedbackSubmissions={this.props.getFeedbackSubmissions}
            id={this.props.id}
            flagged={this.props.flagged}
          />
        </TableCell>
        {/* <TableCell>{this.props.flagged.toString()}</TableCell> */}
        <TableCell>
          <DeleteButton
            getFeedbackSubmissions={this.props.getFeedbackSubmissions}
            id={this.props.id}
          />
        </TableCell>
      </TableRow>
    );
  }
}

export default FeedbackRow;

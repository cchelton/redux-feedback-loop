import React, { Component } from "react";
import DeleteButton from "../../DeleteButton/DeleteButton";
import FlagButton from "../../FlagButton/FlagButton";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";

class FeedbackRow extends Component {
  render() {
    return (
      <TableRow>
        <TableCell>
          <Typography variant="h6">{this.props.feeling}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="h6">{this.props.understanding}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="h6">{this.props.support}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="subtitle1">{this.props.comments}</Typography>
        </TableCell>
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

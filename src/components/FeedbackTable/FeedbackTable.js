//  Feedback table for /admin
import React, { Component } from "react";
import { connect } from "react-redux";
import FeedbackRow from "./FeedbackRow/FeedbackRow";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";

class FeedbackTable extends Component {
  render() {
    const tableRows = this.props.store.adminReducer.map((item, index) => {
      return (
        <FeedbackRow
          feeling={item.feeling}
          understanding={item.understanding}
          support={item.support}
          comments={item.comments}
          flagged={item.flagged}
          key={index}
          getFeedbackSubmissions={this.props.getFeedbackSubmissions}
          id={item.id}
        />
      );
    });
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Feeling</TableCell>
              <TableCell>Comprehension</TableCell>
              <TableCell>Support</TableCell>
              <TableCell>Comments</TableCell>
              <TableCell>Flagged</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{tableRows}</TableBody>
        </Table>
      </TableContainer>
    );
  }
}

const putStoreOnProps = (store) => ({
  store,
});

export default connect(putStoreOnProps)(FeedbackTable);

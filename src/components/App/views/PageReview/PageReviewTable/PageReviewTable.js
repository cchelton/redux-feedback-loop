import React, { Component } from "react";
import { connect } from "react-redux";
import EditButton from "../../../../EditButton/EditButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";

class PageReviewTable extends Component {
  render() {
    const newFeedback = this.props.store.newFeedbackReducer; //  get the reducer so I type less
    return (
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography variant="body1">
                How are you feeling today?
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{newFeedback.feeling}</Typography>
            </TableCell>
            <TableCell>
              <EditButton sectionPath="/" />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <Typography variant="body1">
                How well are you understanding the content?
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">
                {newFeedback.understanding}
              </Typography>
            </TableCell>
            <TableCell>
              <EditButton sectionPath="/understanding" />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <Typography variant="body1">
                How well are you being supported?
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{newFeedback.support}</Typography>
            </TableCell>
            <TableCell>
              <EditButton sectionPath="/support" />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <Typography variant="body1">
                Did you have any comments?
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{newFeedback.comments}</Typography>
            </TableCell>
            <TableCell>
              <EditButton sectionPath="/comments" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

const putStoreOnProps = (store) => ({
  store,
});

export default connect(putStoreOnProps)(PageReviewTable);

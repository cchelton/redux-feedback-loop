import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import FeedbackTable from "../../../FeedbackTable/FeedbackTable";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./PageAdmin.css";

class PageAdmin extends Component {
  componentDidMount() {
    this.getFeedbackSubmissions();
  }
  //
  //  REDUX DISPATCHES

  updateAdminFeedback(feedbackArr) {
    this.props.dispatch({
      type: "SET_ADMIN_FEEDBACK",
      payload: feedbackArr,
    });
  }

  //
  //  SERVER API CALLS

  getFeedbackSubmissions = () => {
    axios
      .get("/feedback")
      .then((response) => {
        this.updateAdminFeedback(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Paper className="HeaderBox">
          <Typography variant="h5">Feedback Results:</Typography>
        </Paper>
        <FeedbackTable getFeedbackSubmissions={this.getFeedbackSubmissions} />
      </div>
    );
  }
}

const putStoreOnProps = (store) => ({
  store,
});

export default connect(putStoreOnProps)(PageAdmin);

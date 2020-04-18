import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import FeedbackTable from "../../../FeedbackTable/FeedbackTable";

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
        <h2>ADMIN</h2>
        <FeedbackTable />
      </div>
    );
  }
}

const putStoreOnProps = (store) => ({
  store,
});

export default connect(putStoreOnProps)(PageAdmin);

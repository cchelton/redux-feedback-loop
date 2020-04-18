// review and submit here. links back to previous pages. probably will need to reset redux store on submit
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NextButton from "../../../NextButton/NextButton";

class PageReview extends Component {
  render() {
    const newFeedback = this.props.store.newFeedbackReducer;
    console.log(newFeedback);

    return (
      <div>
        <h2>Review</h2>

        <table>
          <tbody>
            <tr>
              <td>How are you feeling today?</td>
              <td>{newFeedback.feeling}</td>
            </tr>

            <tr>
              <td>How well are you understanding the content?</td>
              <td>{newFeedback.understanding}</td>
            </tr>

            <tr>
              <td>How well are you being supported?</td>
              <td>{newFeedback.support}</td>
            </tr>

            <tr>
              <td>Did you have any comments?</td>
              <td>{newFeedback.comments}</td>
            </tr>
          </tbody>
        </table>

        <NextButton nextPath="/thanks" />
      </div>
    );
  }
}

const putStoreOnProps = (store) => ({
  store,
});

export default withRouter(connect(putStoreOnProps)(PageReview));

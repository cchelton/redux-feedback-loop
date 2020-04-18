// review and submit here. links back to previous pages. probably will need to reset redux store on submit
import React, { Component } from "react";
import { connect } from "react-redux";
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
            {newFeedback.feeling !== "" && (
              <tr>
                <td>How are you feeling today?</td>
                <td>{newFeedback.feeling}</td>
              </tr>
            )}

            {newFeedback.understanding !== "" && (
              <tr>
                <td>How well are you understanding the content?</td>
                <td>{newFeedback.understanding}</td>
              </tr>
            )}

            {newFeedback.support !== "" && (
              <tr>
                <td>How well are you being supported?</td>
                <td>{newFeedback.support}</td>
              </tr>
            )}

            {newFeedback.comments !== "" && (
              <tr>
                <td>Did you have any comments?</td>
                <td>{newFeedback.comments}</td>
              </tr>
            )}
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

export default connect(putStoreOnProps)(PageReview);

// review and submit here. links back to previous pages. probably will need to reset redux store on submit
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import EditButton from "../../../EditButton/EditButton";
import SubmitButton from "../../../SubmitButton/SubmitButton";

class PageReview extends Component {
  render() {
    const newFeedback = this.props.store.newFeedbackReducer; //  get the reducer so I type less
    console.log(newFeedback);

    return (
      <div>
        <h2>Review</h2>

        <table>
          <tbody>
            <tr>
              <td>How are you feeling today?</td>
              <td>{newFeedback.feeling}</td>
              <td>
                <EditButton sectionPath="/" />
              </td>
            </tr>

            <tr>
              <td>How well are you understanding the content?</td>
              <td>{newFeedback.understanding}</td>
              <td>
                <EditButton sectionPath="/understanding" />
              </td>
            </tr>

            <tr>
              <td>How well are you being supported?</td>
              <td>{newFeedback.support}</td>
              <td>
                <EditButton sectionPath="/support" />
              </td>
            </tr>

            <tr>
              <td>Did you have any comments?</td>
              <td>{newFeedback.comments}</td>
              <td>
                <EditButton sectionPath="/comments" />
              </td>
            </tr>
          </tbody>
        </table>

        <SubmitButton />
      </div>
    );
  }
}

const putStoreOnProps = (store) => ({
  store,
});

export default withRouter(connect(putStoreOnProps)(PageReview));

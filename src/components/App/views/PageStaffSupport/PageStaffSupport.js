import React, { Component } from "react";
import { connect } from "react-redux";
import NextButton from "../../../NextButton/NextButton";
import RatingSelector from "../../../RatingSelector/RatingSelector";

class PageStaffSupport extends Component {
  handleSelection = (event) => {
    this.props.dispatch({
      type: "MODIFY_NEW_FEEDBACK",
      payload: {
        property: "support",
        value: event.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <h2>Staff Support</h2>
        <RatingSelector
          handleSelection={this.handleSelection}
          value={this.props.store.newFeedbackReducer.support}
        />
        <NextButton nextPath="/comments" />
      </div>
    );
  }
}

const putStoreOnProps = (store) => ({
  store,
});

export default connect(putStoreOnProps)(PageStaffSupport);

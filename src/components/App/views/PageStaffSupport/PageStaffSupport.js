import React, { Component } from "react";
import { connect } from "react-redux";
import NextButton from "../../../NextButton/NextButton";
import RatingSelector from "../../../RatingSelector/RatingSelector";

class PageStaffSupport extends Component {
  render() {
    return (
      <div>
        <h2>Staff Support</h2>
        <RatingSelector
          property="support"
          value={this.props.store.newFeedbackReducer.support}
        />
        <NextButton
          nextPath="/comments"
          pageVal={this.props.store.newFeedbackReducer.support}
        />
      </div>
    );
  }
}

const putStoreOnProps = (store) => ({
  store,
});

export default connect(putStoreOnProps)(PageStaffSupport);

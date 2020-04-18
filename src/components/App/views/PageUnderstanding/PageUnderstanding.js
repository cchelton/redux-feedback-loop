import React, { Component } from "react";
import { connect } from "react-redux";
import NextButton from "../../../NextButton/NextButton";
import RatingSelector from "../../../RatingSelector/RatingSelector";

class PageUnderstanding extends Component {
  handleSelection = (event) => {
    this.props.dispatch({
      type: "MODIFY_NEW_FEEDBACK",
      payload: {
        property: "understanding",
        value: event.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <h2>Understanding</h2>
        <RatingSelector
          handleSelection={this.handleSelection}
          value={this.props.store.newFeedbackReducer.understanding}
        />
        <NextButton nextPath="/support" />
      </div>
    );
  }
}

const putStoreOnProps = (store) => ({
  store,
});

export default connect(putStoreOnProps)(PageUnderstanding);

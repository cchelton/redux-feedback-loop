import React, { Component } from "react";
import { connect } from "react-redux";
import NextButton from "../../../NextButton/NextButton";
import RatingSelector from "../../../RatingSelector/RatingSelector";

class PageFeeling extends Component {
  handleSelection = (event) => {
    this.props.dispatch({
      type: "MODIFY_NEW_FEEDBACK",
      payload: {
        property: "feeling",
        value: event.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <h2>FEELING</h2>
        <RatingSelector
          handleSelection={this.handleSelection}
          value={this.props.store.newFeedbackReducer.feeling}
        />
        <NextButton nextPath="./understanding" />
      </div>
    );
  }
}

const putStoreOnProps = (store) => ({
  store,
});

export default connect(putStoreOnProps)(PageFeeling);

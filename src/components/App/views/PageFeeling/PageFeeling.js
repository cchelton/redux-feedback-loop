import React, { Component } from "react";
import { connect } from "react-redux";
import NextButton from "../../../NextButton/NextButton";
import RatingSelector from "../../../RatingSelector/RatingSelector";

class PageFeeling extends Component {
  render() {
    return (
      <div>
        <h2>FEELING</h2>
        <RatingSelector
          property="feeling"
          value={this.props.store.newFeedbackReducer.feeling}
        />
        <NextButton
          nextPath="./understanding"
          pageVal={this.props.store.newFeedbackReducer.feeling}
        />
      </div>
    );
  }
}

const putStoreOnProps = (store) => ({
  store,
});

export default connect(putStoreOnProps)(PageFeeling);

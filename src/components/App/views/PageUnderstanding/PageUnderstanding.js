import React, { Component } from "react";
import { connect } from "react-redux";
import NextButton from "../../../NextButton/NextButton";
import RatingSelector from "../../../RatingSelector/RatingSelector";

class PageUnderstanding extends Component {
  render() {
    return (
      <div>
        <h2>Understanding</h2>
        <RatingSelector property="understanding" />
        <NextButton nextPath="/support" />
      </div>
    );
  }
}

const putStoreOnProps = (store) => ({
  store,
});

export default connect(putStoreOnProps)(PageUnderstanding);

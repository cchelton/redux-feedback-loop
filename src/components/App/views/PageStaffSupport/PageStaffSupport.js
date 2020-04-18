import React, { Component } from "react";
import { connect } from "react-redux";
import NextButton from "../../../NextButton/NextButton";
import RatingSelector from "../../../RatingSelector/RatingSelector";

class PageStaffSupport extends Component {
  render() {
    return (
      <div>
        <h2>Staff Support</h2>
        <RatingSelector property="support" />
        <NextButton nextPath="/comments" />
      </div>
    );
  }
}

const putStoreOnProps = (store) => ({
  store,
});

export default connect(putStoreOnProps)(PageStaffSupport);

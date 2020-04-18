import React, { Component } from "react";
import NextButton from "../../../NextButton/NextButton";

class PageStaffSupport extends Component {
  render() {
    return (
      <div>
        <h2>Staff Support</h2>
        <NextButton nextPath="/comments" />
      </div>
    );
  }
}

export default PageStaffSupport;

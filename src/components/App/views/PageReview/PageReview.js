// review and submit here. links back to previous pages. probably will need to reset redux store on submit
import React, { Component } from "react";
import NextButton from "../../../NextButton/NextButton";

class PageReview extends Component {
  render() {
    return (
      <div>
        <h2>Review</h2>
        <NextButton nextPath="/thanks" />
      </div>
    );
  }
}

export default PageReview;

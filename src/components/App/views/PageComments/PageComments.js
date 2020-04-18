import React, { Component } from "react";
import NextButton from "../../../NextButton/NextButton";

class PageComments extends Component {
  render() {
    return (
      <div>
        <h2>COMMENTS</h2>
        <NextButton nextPath="/review" />
      </div>
    );
  }
}

export default PageComments;

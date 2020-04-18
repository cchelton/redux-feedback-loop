import React, { Component } from "react";
import NextButton from "../../../NextButton/NextButton";
import TextInput from "../../../TextInput/TextInput";

class PageComments extends Component {
  render() {
    return (
      <div>
        <h2>COMMENTS</h2>
        <TextInput property="comments" />
        <NextButton nextPath="/review" pageVal="comments" />
      </div>
    );
  }
}

export default PageComments;

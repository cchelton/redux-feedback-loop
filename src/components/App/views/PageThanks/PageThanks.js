//  display thank you message for completing feedback and have button to restart whole feedback process.
//  probably should clear the store on submit
import React, { Component } from "react";
import NextButton from "../../../NextButton/NextButton";

class PageThanks extends Component {
  render() {
    return (
      <div>
        <h2>Thanks</h2>
        <NextButton nextPath="/" />
      </div>
    );
  }
}

export default PageThanks;

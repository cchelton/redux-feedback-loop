import React, { Component } from "react";
import NextButton from "../../../NextButton/NextButton";
import RatingSelector from "../../../RatingSelector/RatingSelector";

class PageFeeling extends Component {
  render() {
    return (
      <div>
        <h2>FEELING</h2>
        <RatingSelector property="feeling" />
        <NextButton nextPath="./understanding" />
      </div>
    );
  }
}

export default PageFeeling;

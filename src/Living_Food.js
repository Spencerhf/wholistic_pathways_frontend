import React, { Component } from "react";
import LivingFoodInfo from "./Components/LivingFood/LivingFoodInfo";
import LivingFoodSchedule from "./Components/LivingFood/LivingFoodSchedule";
import Row from "react-bootstrap/Row";

export default class Living_Food extends Component {
  render() {
    return (
      <div>
        <Row className="text-blurb bg-container box-shadow">
          <LivingFoodInfo />
          <LivingFoodSchedule />
        </Row>
      </div>
    );
  }
}

import React, { Component } from "react";
import HomeopathyInfo from "./Components/Homeopathy/HomeopathyInfo";
import HomeopathySchedule from "./Components/Homeopathy/HomeopathySchedule";

import Row from "react-bootstrap/Row";

export default class Homeopathy extends Component {
  render() {
    return (
      <div>
        <Row className="text-blurb bg-container box-shadow">
          <HomeopathyInfo />
          <HomeopathySchedule />
        </Row>
      </div>
    );
  }
}

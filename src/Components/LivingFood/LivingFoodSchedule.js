import React, { Component } from "react";
import ScheduleTable from "./ScheduleTable";
import ContactMe from "../ContactMe";
import ClassInfo from "./ClassInfo";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class HomeopathySchedule extends Component {
  render() {
    return (
      <div className="w-100 mx-auto text-center">
        <h3 style={{ marginTop: "30px" }}>
          Are you ready to take control of your health?
        </h3>
        <h4>Schedule a class today!</h4>
        <div style={{ overflow: "auto" }}>
          <ScheduleTable />
        </div>
        <Row className="text-left" style={{marginTop: "30px", padding: "20px"}}>
          <Col className="col-lg-6 col-12">
            <ClassInfo />
          </Col>
          <Col className="col-lg-6 col-12">
            <ContactMe messageText="Message me the class name and date you would like to attend" />
          </Col>
        </Row>
      </div>
    );
  }
}

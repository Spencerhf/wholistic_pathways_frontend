import React, { Component } from "react";
import ContactMe from "../ContactMe";
import AboutMe from "../AboutMe";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default class HomeContact extends Component {

  render() {
    return (
      <Row
        className="box-shadow"
        style={{ backgroundColor: "rgb(82, 82, 82)" }}
      >
        <Col className="col-lg-6 col-12">
          <h2 className="contact-title">Who am I</h2>
          <Row style={{ padding: "20px" }}>
              <AboutMe />
          </Row>
        </Col>
        <Col className="col-lg-6 col-12">
          <h2 className="contact-title">Contact Me</h2>
          <ContactMe 
            messageText="Let me know what I can help you with"
            textColor="white"
          />
        </Col>
      </Row>
    );
  }
}

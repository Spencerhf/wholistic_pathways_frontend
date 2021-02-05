import React, { Component } from "react";
import {Link} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Homeopathy from "../../Images/homeopathy.jpg";
import Living_Food from "../../Images/Kombucha.jpg";

export default class HomeInfo extends Component {
  render() {
    return (
      <div className="bg-container box-shadow">
        <Row
          className="w-100 mx-auto align-items-center justify-content-around"
          style={{ marginBottom: "30px" }}
        >
          <Col className="col-lg-6 col-12 text-center">
            <h3 className="info-header">
              <strong>Homeopathy</strong>
            </h3>
            <p>
              Homeopathy is one of the oldest forms of medicine and is still
              widely used today all around the world. It is safe, effective and
              provides a simple, convenient and very affordable way for you to
              treat the most common ailments you and your family encounter.
              Learn how you can begin using homeopathy in your home.
            </p>
            <Button className="btn"><Link to="/homeopathy" style={{color: "white", textDecoration: "none"}}>Learn More</Link></Button>
          </Col>
          <Col className="col-lg-6 col-12">
            <img
              className="img1 box-shadow mx-auto"
              src={Homeopathy}
              alt="Homeopathy"
            />
          </Col>
        </Row>
        <hr
          style={{
            width: "75%",
            margin: "auto",
            marginBottom: "30px",
            height: ".2px",
            backgroundColor: "black",
          }}
        />
        <Row className="w-100 mx-auto align-items-center justify-content-around">
          <Col className="col-lg-6 col-12 text-center">
            <h3 className="info-header">
              <strong>Living Food</strong>
            </h3>
            <p className="info-p">
              Living foods, those full of healthy, living organisms, contribute
              to gut health. Gut health is the key to overall physical, mental
              and emotional health and wellbeing. Learn more about what kinds of
              foods you can consume to help improve and maintain gut health.
            </p>
            <Button><Link to="/living food" style={{color: "white", textDecoration: "none"}}>Learn More</Link></Button>
          </Col>
          <Col className="col-lg-6 col-12">
            <img
              className="img1 img2 box-shadow mx-auto"
              src={Living_Food}
              alt="Living Food"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

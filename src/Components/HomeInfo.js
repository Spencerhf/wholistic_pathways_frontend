import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Homeopathy from "../Images/homeopathy.jpg";
import Living_Food from "../Images/Kombucha.jpg";

export default class HomeInfo extends Component {
  render() {
    return (
      <div className="mx-auto info-bg box-shadow">
        <Row className="w-100 mx-auto align-items-center justify-content-around" style={{ marginBottom: "60px" }}>
          <Col className="col-lg-6 col-12"><img className="img1 box-shadow mx-auto" src={Homeopathy} alt="Homeopathy"/></Col>
          <Col className="col-lg-6 col-12 text-center">
            <h3 className="info-header"><strong>Homeopathy</strong></h3>
            <p className="info-p">
              Homeopathy is a system of medicine that seeks to correct
              imbalances that cause symptoms by activating, strengthening, and
              reeducating the body's own defense and immune systems allowing it
              to heal itself. It has been used safely and effectively for over
              200 years and is still widely used around the world today.
              Homeopathy can be used to treat a wide range of conditions and
              with no negative side effects. If you want to learn more about
              homeopathy
            </p>
            <Button>Learn More</Button>
          </Col>
        </Row>
        <hr style={{width: "90%", margin: "auto", marginBottom: "60px", height: ".2px", backgroundColor: "black"}}/>
        <Row className="w-100 mx-auto align-items-center justify-content-around">
          <Col className="col-lg-6 col-12 text-center">
            <h3 className="info-header"><strong>Living Food</strong></h3>
            <p className="info-p">
              Have you ever heard of living foods? No, I’m not talking about Bob
              the Tomato. I’m talking about cultured or fermented foods like
              kefir, kombucha and vegetables. These foods contain billions of
              living, healthy organisms that are incredibly beneficial to your
              mental, physical and emotional health and can boost the health of
              your gut. Did you know that gut health is key to your overall
              health and wellbeing? Many of the health struggles we face today
              can be linked to the health of our guts. Regularly consuming
              cultured foods can greatly improve symptoms such as chronic
              fatigue, depression, digestive issues, food and environmental
              allergies, acne, eczema, high blood pressure, obesity, and more.
            </p>
            <Button>Learn More</Button>
          </Col>
          <Col className="col-lg-6 col-12"><img className="img1 img2 box-shadow mx-auto" src={Living_Food} alt="Living Food"/></Col>
        </Row>
      </div>
    );
  }
}

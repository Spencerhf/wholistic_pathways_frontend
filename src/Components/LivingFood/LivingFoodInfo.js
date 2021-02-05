import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Living_Food from "../../Images/living-food.jpg";

export default class LivingFoodInfo extends Component {
  render() {
    return (
      <div className="w-100">
        <h1 className="text-center" style={{ margin: "30px 0px" }}>
          What is Living Food?
        </h1>
        <div className="info-div" style={{ maxWidth: "90%", margin: "auto" }}>
          <Row className="mb-2">
            <Col className="col-lg-6 col-12">
              <p>
                Have you ever heard of living foods? No, I’m not talking about
                Bob the Tomato. I’m talking about cultured or fermented foods
                like kefir, kombucha and vegetables. These foods contain
                billions of living, healthy organisms that are incredibly
                beneficial to your mental, physical and emotional health and can
                boost the health of your gut. Did you know that gut health is
                key to your overall health and wellbeing? Many of the health
                struggles we face today can be linked to the health of our guts.
                Regularly consuming cultured foods can greatly improve symptoms
                such as chronic fatigue, depression, digestive issues, food and
                environmental allergies, acne, eczema, high blood pressure,
                obesity, and more. I want to help you find your path to whole
                health by teaching you about cultured foods, why you should
                implement them into your diet and how to make them.
              </p>
            </Col>
            <Col className="col-lg-6 col-12">
              <img
                src={Living_Food}
                alt="Fermented foods"
                className="img1 mx-auto box-shadow align-middle"
                style={{maxHeight: "500px"}}
              ></img>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

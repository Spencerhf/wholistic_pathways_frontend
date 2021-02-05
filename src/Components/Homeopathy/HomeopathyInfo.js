import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Natural_Health from "../../Images/natural-health.jpg";

export default class HomeopathyInfo extends Component {
  render() {
    return (
      <div className="w-100">
        <h1 className="text-center" style={{ margin: "30px 0px" }}>
          What is Homeopathy?
        </h1>
        <div className="info-div" style={{ maxWidth: "90%", margin: "auto" }}>
          <Row className="mb-2">
            <Col className="col-lg-6 col-12">
              <p>
                Homeopathy is a system of medicine that seeks to correct
                imbalances that cause symptoms by activating, strengthening, and
                reeducating the body's own defense and immune systems allowing
                it to heal itself. It has been used safely and effectively for
                over 200 years and is still widely used around the world today.
                Homeopathy can be used to treat a wide range of conditions and
                with no negative side effects. Using homeopathy, I will work
                with you to determine which remedies would be most appropriate
                for what you're experiencing. If you're interested in working
                with me, please use the contact form and send me an email to
                find out more.
              </p>
            </Col>
            <Col className="col-lg-6 col-12">
              <img
                src={Natural_Health}
                className="img1 mx-auto box-shadow align-middle"
                alt="Natural Health"
              ></img>
            </Col>
          </Row>
          <p className="mb-4">Want to learn how to use homeopathy yourself?</p>
          <p>
            I facilitate homeopathy classes locally and online. With homeopathy
            you can learn to treat the everyday ailments that you and your loved
            ones experience at home with ease and confidence. Imagine not having
            to run to the doctor for every little thing! You will learn to treat
            teething, seasonal allergies, bumps, bruises, colds/flu, coughs,
            headaches and other common complaints. You will learn how to choose
            remedies, how to dose, how to know if it's working, and more. If you
            are interested in learning how to use homeopathy in your home,
            please use the contact form and send me an email to find out more.
          </p>
        </div>
      </div>
    );
  }
}

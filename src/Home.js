import React, { Component } from "react";
import "./index.css";

import HomeInfo from "./Components/HomeInfo";
import ContactForm from "./Components/ContactForm";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="bg">
          <div id="overlay">
            <div
              className="text-center"
              style={{ color: "white", fontSize: "50px", paddingTop: "130px" }}
            >
              Find your path <br /> to whole health
            </div>
          </div>
        </div>
        <HomeInfo />
        <ContactForm />
      </div>
    );
  }
}

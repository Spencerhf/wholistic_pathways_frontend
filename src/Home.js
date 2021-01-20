import React, { Component } from "react";
import "./index.css";

import Home_info from "./Components/Home_info";
import Contact_form from "./Components/Contact_form";

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
        <Home_info />
        <Contact_form />
      </div>
    );
  }
}

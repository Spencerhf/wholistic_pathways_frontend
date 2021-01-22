import React, { Component } from "react";
import Facebook_icon from "../Images/facebook-icon.png";
import Instagram_icon from "../Images/instagram-icon.png";

export default class Footer extends Component {
  render() {
    return (
      <div
        className="w-100"
        style={{ height: "80px", paddingTop: "25px", backgroundColor: "rgb(49, 49, 49)" }}
      >
        <p className="text-center text-white"><small>&copy; 2020 WholisticPathways</small></p>
      </div>
    );
  }
}

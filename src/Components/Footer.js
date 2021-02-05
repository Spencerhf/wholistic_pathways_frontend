import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div
        className="w-100"
        style={{ height: "80px", paddingTop: "25px", backgroundColor: "rgb(82, 82, 82)" }}
      >
        <p className="text-center text-white"><small>&copy; 2020 WholisticPathways</small></p>
      </div>
    );
  }
}

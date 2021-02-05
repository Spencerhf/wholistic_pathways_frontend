import React, { Component } from "react";

export default class PathBackground extends Component {
  render() {
    return (
      <div className="bg box-shadow">
        <div id="overlay">
          <div
            className="text-center"
            style={{ color: "white", fontSize: "3.5rem", padding: "110px 15px 0px 15px" }}
          >
            Find your path <br /> to whole health
          </div>
        </div>
      </div>
    );
  }
}

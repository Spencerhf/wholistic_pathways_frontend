import React, { Component } from "react";
import HomeInfo from "./Components/Home/HomeInfo";
import HomeContact from "./Components/Home/HomeContact";

export default class Home extends Component {
  render() {
    return (
      <div>
        <HomeInfo />
        <HomeContact />
      </div>
    );
  }
}

import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "../index.css";

export default class Navigationbar extends Component {

  clicked = () => {
    window.location.reload();
  }

  refresh = () => {
    setTimeout(this.clicked, 100)
  }

  render() {
    return (
      <Navbar
        className="sticky-top w-100"
        style={{ backgroundColor: "rgb(82, 82, 82)", zIndex: "2", top: "-1px" }}
        variant="dark"
        expand="lg"
      >
        <Navbar.Brand className="pl-4"><Link style={{ fontSize: "1.5rem", color: "white" }} to="/" onClick={this.refresh}>WholisticPathways</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto pr-2" style={{ height: "auto" }}>
            <Link className="links btn mx-1" to="/homeopathy" onClick={this.refresh}>Homeopathy</Link>
            <Link className="links btn mx-1" to="/living food" onClick={this.refresh}>Living Food</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

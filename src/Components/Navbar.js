import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../index.css";

export default class Navigationbar extends Component {

  render() {
    return (
      <Navbar
        className="sticky-top w-100"
        style={{ backgroundColor: "rgb(49, 49, 49)", zIndex: "2", top: "-1px" }}
        variant="dark"
        expand="lg"
      >
        <Navbar.Brand className="pl-4" style={{ fontSize: "1.5rem" }}>WholisticPathways</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto pr-4" style={{ height: "auto" }}>
            <Nav.Link className="btn" style={{ fontSize: "18px" }}>Homeopathy</Nav.Link>
            <Nav.Link className="btn" style={{ fontSize: "18px" }}>Living Food</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

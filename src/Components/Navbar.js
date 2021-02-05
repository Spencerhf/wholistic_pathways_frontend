import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "../index.css";

export default class Navigationbar extends Component {

  render() {
    return (
      <Navbar
        className="sticky-top w-100"
        style={{ backgroundColor: "rgb(82, 82, 82)", zIndex: "2", top: "-1px" }}
        variant="dark"
        expand="lg"
      >
        <Navbar.Brand className="pl-4"><Link style={{ fontSize: "1.5rem", color: "white" }} to="/">WholisticPathways</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto pr-2" style={{ height: "auto" }}>
            <Link className="links btn mx-1" to="/homeopathy">Homeopathy</Link>
            <Link className="links btn mx-1" to="/living food">Living Food</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

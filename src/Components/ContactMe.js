import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class ContactMe extends Component {
  state = {
    name: "",
    message: "",
    email: "",
  };

  formSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    axios
      .post("https://vast-castle-65445.herokuapp.com/send", data)
      .catch(() => {
        console.log("Message not sent");
      });
  };

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
    });
  };

  render() {
    return (
      <Form
        className="contact-form"
        style={{ color: this.props.textColor }}
        onSubmit={(e) => this.formSubmit(e)}
      >
        <Form.Label className="message-name">Your Name</Form.Label>
        <Form.Control
          onChange={(e) => this.setState({ name: e.target.value })}
          name="name"
          className="message-name text-field"
          type="text"
          placeholder="First and Last name"
          value={this.state.name}
        />

        <Form.Label className="message-email">Your Email</Form.Label>
        <Form.Control
          onChange={(e) => this.setState({ email: e.target.value })}
          name="email"
          className="message-email text-field"
          type="email"
          placeholder="homeopathy@email.com"
          value={this.state.email}
        />

        <Form.Label className="message">Your Message</Form.Label>
        <Form.Control
          onChange={(e) => this.setState({ message: e.target.value })}
          className="message-input text-field"
          as="textarea"
          placeholder={this.props.messageText}
          value={this.state.message}
          style={{ height: "120px" }}
        />

        <div className="mx-auto" style={{ width: "150px" }}>
          <Button type="submit" className="btn">
            Send Message
          </Button>
        </div>
      </Form>
    );
  }
}
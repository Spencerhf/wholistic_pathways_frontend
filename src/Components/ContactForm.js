import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class ContactForm extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "Send Message",
  };

  formSubmit = (e) => {
    e.preventDefault();

    this.setState({
      buttonText: "...sending",
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    axios
      .post("http://localhost:5000/send", data)
      .then((res) => {
        this.setState({ sent: true }, this.resetForm());
      })
      .catch(() => {
        console.log("Message not sent");
      });
  };

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      buttonText: "Message Sent",
    });
  };

  render() {
    return (
      <div className="box-shadow" style={{ width: "100%", backgroundColor: "rgb(49, 49, 49)" }}>
        <h2 className="contact-title">Contact Me</h2>
        <Form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
          <Form.Label className="message">Your Message</Form.Label>
          <Form.Control
            onChange={(e) => this.setState({ message: e.target.value })}
            className="message-input text-field"
            as="textarea"
            placeholder="Let me know what I can help you with"
            value={this.state.message}
          />

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

          <div className="mx-auto" style={{ width: "150px" }}>
            <Button type="submit" className="button button-primary">
              {this.state.buttonText}
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

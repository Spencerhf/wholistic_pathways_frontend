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
      .post("/api/v1", data)
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
      <Form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
        <Form.Label className="message">Your Message</Form.Label>
        <Form.Control
          onChange={(e) => this.setState({ message: e.target.value })}
          className="message-input"
          as="textarea"
          placeholder="Please write your message here"
          value={this.state.message}
        />

        <Form.Label className="message-name">Your Name</Form.Label>
        <Form.Control
          onChange={(e) => this.setState({ name: e.target.value })}
          name="name"
          className="message-name"
          type="text"
          placeholder="Your Name"
          value={this.state.name}
        />

        <Form.Label className="message-email">Your Email</Form.Label>
        <Form.Control
          onChange={(e) => this.setState({ email: e.target.value })}
          name="email"
          className="message-email"
          type="email"
          placeholder="your@email.com"
          value={this.state.email}
        />

        <div className="button--container">
          <Button type="submit" className="button button-primary">
            {this.state.buttonText}
          </Button>
        </div>
      </Form>
    );
  }
}

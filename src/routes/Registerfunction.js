import React, { Component } from "react";
import axios from "axios";
import "./Registerfunction.css";
export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ID: "",
      password: "",
      password_confirmation: "",
      registrationErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { ID, password, password_confirmation } = this.state;

    axios
      .post(
        "http://localhost:3001/registrations",
        {
          user: {
            ID: ID,
            password: password,
            password_confirmation: password_confirmation
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("registration error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div className="idfont">ID</div>
          <div className="box1">
          <input
            type="ID"
            name="ID"
            placeholder="ID"
            value={this.state.ID}
            onChange={this.handleChange}
            required
          /></div>

          <div className="password">Password</div>
          <div className="box1">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          /></div>
          
          <div className="passwordcon">Password Confirmation</div>
          <div className="box1">
          <input
            type="password"
            name="password_confirmation"
            placeholder="Password confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          /></div>

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
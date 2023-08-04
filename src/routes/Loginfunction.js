import React, { Component } from "react";
import axios from "axios";
import "./Loginfunction.css"
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ID: "",
      password: "",
      loginErrors: ""
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
    const { ID, password } = this.state;

    axios
      .post(
        "http://localhost:3001/sessions",
        {
          user: {
            ID: ID,
            password: password
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.logged_in) {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("login error", error);
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
</form>
        
          <button1 type="submit">Login</button1>
        
      </div>
    );
  }
}
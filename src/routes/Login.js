import React, { Component } from "react";
import axios from "axios";
import "./Login.css"

import Login from "./Loginfunction.js";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  handleLogoutClick() {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then(response => {
        this.props.handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      });
  }

  render() {
    return (
      <div className="login">
        <div className="welcome">Welcome</div>
        <div className="companyname">ModStore.ai</div>
        
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <div class="place">
        <button onClick={() => this.handleLogoutClick()}>Logout</button>
      </div>
      <h1>Status: {this.props.loggedInStatus}</h1>

      </div>
    );
  }
}
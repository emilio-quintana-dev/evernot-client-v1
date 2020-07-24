// Necessary imports
import React, { Component } from "react";
import axios from "axios";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import { Card, CardContent, Button, Typography } from "@material-ui/core";

// Main class
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLogForm: false,
      showRegForm: true,
    };
  }

  // Function gets invoked when login/registration
  // was successfully confirmed by the back-end
  handleSuccesfulAuth = (data) => {
    // This function will update the state
    // of the parent component
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  };

  // Function gets invoked when the logout
  // button is clicked
  handleLogoutClick = () => {
    // Uses axios library to make a delete request
    // and destroy the session
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then((response) => {
        this.props.handleLogout();
      })
      .catch((error) => console.log("Error", error));
  };

  // Switches between registration and login form
  toggleForm = () => {
    const newRegForm = !this.state.showRegForm;
    const newLogForm = !this.state.showLogForm;

    this.setState({
      showLogForm: newLogForm,
      showRegForm: newRegForm,
    });
  };

  // Renders main login card with a
  // Material UI component
  renderLoginCard = () => {
    return (
      <Card
        style={{
          padding: "20px",
          textAlign: "center",
          width: "350px",

          marginTop: "30px",
        }}
      >
        <CardContent>
          <img
            src={require("../public/react.png")}
            width="75px"
            height="75px"
            style={{ marginBottom: "10px" }}
          />

          <Typography variant="h1">Hi there!</Typography>

          {this.state.showLogForm ? (
            <Login handleSuccesfulAuth={this.handleSuccesfulAuth} />
          ) : null}
          {this.state.showRegForm ? (
            <Registration handleSuccesfulAuth={this.handleSuccesfulAuth} />
          ) : null}

          {this.state.showLogForm ? (
            <Button
              size="small"
              style={{
                marginTop: "25px",
                marginBottom: "0px",
                fontSize: "15px",
              }}
              onClick={this.toggleForm}
            >
              or create an account
            </Button>
          ) : null}
          {this.state.showRegForm ? (
            <Button
              size="small"
              style={{
                marginTop: "25px",
                marginBottom: "0px",
                fontSize: "15px",
              }}
              onClick={this.toggleForm}
            >
              or sign in
            </Button>
          ) : null}
        </CardContent>
      </Card>
    );
  };

  render() {
    return <div>{this.renderLoginCard()}</div>;
  }
}

export default Home;

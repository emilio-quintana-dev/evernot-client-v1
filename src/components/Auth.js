//                    Necesary Imports
// ---------------x--------------------x---------------
import React, { Component } from "react";
//                Authorization Component
// ---------------x--------------------x---------------
import Registration from "./auth/Registration";
import Login from "./auth/Login";
//                    UI Components
// ---------------x--------------------x---------------
import { Card, CardContent, Button, Typography } from "@material-ui/core";
//                Login/Registration Page
// ---------------x--------------------x---------------
class Auth extends Component {
  constructor() {
    super();

    this.state = {
      showLogForm: true,
      showRegForm: false,
    };
  }

  //      Sends LOGIN action and re-directs to dashboard
  // ---------------x--------------------x---------------
  handleSuccesfulAuth = (data) => {
    this.props.handleLogin(data);
    this.props.history.push("/notes");
  };

  //        Toggles between Login and Registration Form
  // ---------------x--------------------x---------------
  toggleForm = () => {
    const newRegForm = !this.state.showRegForm;
    const newLogForm = !this.state.showLogForm;

    this.setState({
      showLogForm: newLogForm,
      showRegForm: newRegForm,
    });
  };

  //            Renders Login/Registration Card
  // ---------------x--------------------x---------------
  render() {
    const cardStyle = {
      padding: "20px",
      textAlign: "center",
      minWidth: "350px",
      marginTop: "50px",
      backgroundColor: "#1a2634",
    };

    const headerStyle = {
      fontSize: "50px",
      color: "#FFF",
    };

    const buttonStyle = {
      fontSize: "15px",
      color: "#d7d9db",
    };

    return (
      <Card style={cardStyle}>
        <CardContent>
          <Typography style={headerStyle}>
            <span style={{ color: "#66e2d5" }}>&lt;</span>
            NOTE
            <span style={{ color: "#66e2d5" }}>&gt;</span>
          </Typography>

          {this.state.showLogForm ? (
            <Login
              handleSuccesfulAuth={this.handleSuccesfulAuth}
              displayErrorSnackbar={this.props.displayErrorSnackbar}
            />
          ) : null}
          {this.state.showRegForm ? (
            <Registration handleSuccesfulAuth={this.handleSuccesfulAuth} />
          ) : null}

          {this.state.showLogForm ? (
            <Button style={buttonStyle} onClick={this.toggleForm}>
              or create an account
            </Button>
          ) : null}
          {this.state.showRegForm ? (
            <Button style={buttonStyle} onClick={this.toggleForm}>
              or sign in
            </Button>
          ) : null}
        </CardContent>
      </Card>
    );
  }
}

export default Auth;

import React, { Component } from "react";
import axios from "axios";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import { Card, CardContent, Button, Typography } from "@material-ui/core";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLogForm: true,
      showRegForm: false,
    };
  }

  handleSuccesfulAuth = (data) => {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  };

  handleLogoutClick = () => {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then((response) => {
        this.props.handleLogout();
      })
      .catch((error) => console.log("Error", error));
  };

  toggleForm = () => {
    const newRegForm = !this.state.showRegForm;
    const newLogForm = !this.state.showLogForm;

    this.setState({
      showLogForm: newLogForm,
      showRegForm: newRegForm,
    });
  };

  renderLoginCard = () => {
    return (
      <Card
        style={{
          padding: "20px",
          textAlign: "center",
          width: "350px",
          marginTop: "50px",
        }}
      >
        <CardContent>
          <Typography
            style={{
              fontSize: "50px",
              marginRight: "10px",
            }}
          >
            Notify •••
          </Typography>

          {this.state.showLogForm ? (
            <Login handleSuccesfulAuth={this.handleSuccesfulAuth} />
          ) : null}
          {this.state.showRegForm ? (
            <Registration handleSuccesfulAuth={this.handleSuccesfulAuth} />
          ) : null}

          {this.state.showLogForm ? (
            <Button
              style={{
                marginTop: "15px",
                fontSize: "15px",
              }}
              onClick={this.toggleForm}
            >
              or create an account
            </Button>
          ) : null}
          {this.state.showRegForm ? (
            <Button
              style={{
                marginTop: "15px",
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

import React, { Component } from "react";
import axios from "axios";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

class Home extends Component {
  constructor(props) {
    super(props);
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

  renderLoginCard = () => {
    return (
      <Card style={{ padding: "20px", textAlign: "center", width: "200px" }}>
        <CardContent>
          <img
            src={require("../public/react.png")}
            width="30px"
            height="30px"
            style={{ marginBottom: "10px" }}
          />

          <Typography variant="h3">Hi there!</Typography>
          <Typography variant="body2" style={{ color: "gray" }}>
            Please, sign in to continue.
          </Typography>

          {/* <Registration handleSuccesfulAuth={this.handleSuccesfulAuth} /> */}
          <Login handleSuccesfulAuth={this.handleSuccesfulAuth} />
        </CardContent>
      </Card>
    );
  };

  render() {
    return <div>{this.renderLoginCard()}</div>;
  }
}

export default Home;

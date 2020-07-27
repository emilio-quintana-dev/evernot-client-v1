import React, { Component } from "react";
import axios from "axios";
import { Button, Input, FormGroup } from "@material-ui/core";

//              Controlled Form for Logins
// ---------------x--------------------x---------------
class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  //              Handles Submission of User
  // ---------------x--------------------x---------------
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    axios
      .post(
        "http://localhost:3001/sessions",
        {
          user: {
            email: email,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.logged_in) {
          this.props.handleSuccesfulAuth(response.data);
        } else {
          this.props.displaySnackbar();
        }
      })
      .catch((err) => console.log(err));
  };

  //              Controlled Form On Change Listener
  // ---------------x--------------------x---------------
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <FormGroup
          onSubmit={this.handleSubmit}
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
            style={{ marginBottom: "10px", fontSize: "20px" }}
          />
          <br />

          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
            style={{ marginBottom: "30px", fontSize: "20px" }}
          />
          <br />

          <Button
            size="large"
            variant="contained"
            color="primary"
            type="submit"
            style={{
              marginBottom: "10px",
              backgroundColor: "#17252A",
              color: "#FFF",
              fontSize: "20px",
            }}
            onClick={this.handleSubmit}
          >
            Login
          </Button>
        </FormGroup>
      </div>
    );
  }
}

export default Login;

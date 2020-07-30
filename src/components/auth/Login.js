//                    Necesary Imports
// ---------------x--------------------x---------------
import React, { Component } from "react";
import axios from "axios";
//                    UI Components
// ---------------x--------------------x---------------
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
  //            Handles Submission of Login Form
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
          this.props.displayErrorSnackbar();
        }
      })
      .catch((err) => console.log(err));
  };

  //            Controlled Form On Change Listener
  // ---------------x--------------------x---------------
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const formStyle = {
      textAlign: "center",
      marginTop: "10px",
    };
    const inputStyle = {
      color: "#8d949b",
      marginBottom: "20px",
      fontSize: "20px",
      backgroundColor: "#2e3a48",
      border: "1px solid #444f5b",
      borderRadius: "10px",
      padding: "2px",
      paddingLeft: "10px",
    };

    const buttonStyle = {
      marginBottom: "10px",
      backgroundColor: "#7b78ff",
      fontSize: "20px",
      borderRadius: "10px",
    };

    return (
      <FormGroup onSubmit={this.handleSubmit} style={formStyle}>
        <Input
          disableUnderline
          type="text"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
          style={inputStyle}
          required
        />

        <Input
          disableUnderline
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
          required
          style={inputStyle}
        />

        <Button
          size="large"
          variant="contained"
          type="submit"
          style={buttonStyle}
          onClick={this.handleSubmit}
        >
          Login
        </Button>
      </FormGroup>
    );
  }
}

export default Login;

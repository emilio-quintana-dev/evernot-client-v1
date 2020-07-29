//                    Necesary Imports
// ---------------x--------------------x---------------
import React, { Component } from "react";
import axios from "axios";
//                    UI Components
// ---------------x--------------------x---------------
import { Button, Input, FormGroup } from "@material-ui/core";
//              Controlled Form for Registrations
// ---------------x--------------------x---------------
class Registration extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, password_confirmation } = this.state;
    axios
      .post(
        "http://localhost:3001/registrations",
        {
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
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
      padding: "4px",
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
          required
          style={inputStyle}
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

        <Input
          disableUnderline
          type="password"
          name="password_confirmation"
          placeholder="Password Confirmation"
          value={this.state.password_confirmation}
          onChange={this.handleChange}
          required
          style={inputStyle}
        />

        <Button
          style={buttonStyle}
          variant="contained"
          onClick={this.handleSubmit}
        >
          Register
        </Button>
      </FormGroup>
    );
  }
}

export default Registration;

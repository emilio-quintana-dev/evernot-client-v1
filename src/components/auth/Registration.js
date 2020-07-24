import React, { Component } from "react";
import axios from "axios";
import { Button, Input, FormGroup, FormHelperText } from "@material-ui/core";

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: "",
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
          this.setState({
            registrationErrors: response.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };

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
            style={{ marginBottom: "10px", fontSize: "20px" }}
          />
          <br />

          <Input
            type="password"
            name="password_confirmation"
            placeholder="Password Confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
            style={{ marginBottom: "30px", fontSize: "20px" }}
          />
          <br />

          <Button
            style={{ fontSize: "15px", marginTop: "5px" }}
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            Register
          </Button>
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormGroup>
      </div>
    );
  }
}

export default Registration;

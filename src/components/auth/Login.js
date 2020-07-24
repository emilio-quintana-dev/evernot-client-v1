// Necessary imports
import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Input,
  InputLabel,
  FormGroup,
  FormHelperText,
} from "@material-ui/core";

// Main class
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: "",
    };
  }

  // Function gets invoked when Form is submitted,
  // a post request using Axios is made to the back-end
  // to create a new session
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
        // if the response from the backend
        // is true then run update parent state
        if (response.data.logged_in) {
          this.props.handleSuccesfulAuth(response.data);
        }
      })
      .catch((err) => console.log(err));
  };

  // Handles controlled form for all inputs
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
            style={{ fontSize: "15px", marginTop: "5px" }}
            onClick={this.handleSubmit}
          >
            Login
          </Button>
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormGroup>
      </div>
    );
  }
}

export default Login;

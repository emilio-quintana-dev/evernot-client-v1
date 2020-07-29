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
          this.props.displayErrorSnackbar();
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
            disableUnderline
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
            style={{
              color: "#8d949b",
              marginBottom: "10px",
              fontSize: "20px",
              backgroundColor: "#2e3a48",
              border: "1px solid #444f5b",
              borderRadius: "10px",
              padding: "4px",
            }}
          />
          <br />

          <Input
            disableUnderline
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
            style={{
              color: "#8d949b",
              marginBottom: "30px",
              fontSize: "20px",
              backgroundColor: "#2e3a48",
              border: "1px solid #444f5b",
              borderRadius: "10px",
              padding: "4px",
            }}
          />
          <br />

          <Button
            size="large"
            variant="contained"
            type="submit"
            style={{
              marginBottom: "10px",
              backgroundColor: "#17252A",
              backgroundColor: "#7b78ff",
              fontSize: "20px",
              borderRadius: "10px",
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

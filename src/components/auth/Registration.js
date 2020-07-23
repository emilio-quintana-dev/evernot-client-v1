import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

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
        <form onSubmit={this.handleSubmit} style={{ textAlign: "center" }}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
            style={{ marginBottom: "10px" }}
          />
          <br />

          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
            style={{ marginBottom: "10px" }}
          />
          <br />

          <Input
            type="password"
            name="password_confirmation"
            placeholder="Password Confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
            style={{ marginBottom: "30px" }}
          />
          <br />

          <Button
            style={{ marginBottom: "5px" }}
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            Register
          </Button>
        </form>
      </div>
    );
  }
}

export default Registration;

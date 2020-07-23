import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: "",
    };
  }

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
        <form
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
            style={{ marginBottom: "30px" }}
          />
          <br />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: "5px" }}
            onClick={this.handleSubmit}
            style={{ marginBottom: "5px" }}
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;

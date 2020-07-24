// Parent component

// Necessary imports
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import Dashboard from "./Dashboard";

// Main class
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    };
  }

  // Function uses the axios library to make a GET request to
  // the rails API. Returns a response that includes a logged_in
  // key that it's either true or false and a user key with
  // the current user or an empty object
  checkLoginStatus = () => {
    // It also modifies the state to reflect the status of the session
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then((response) => {
        if (
          response.data.logged_in &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user,
          });
        } else if (
          !response.data.logged_in &&
          this.state.loggedInStatus === "LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {},
          });
        }
      })
      .catch((error) => console.log("Error", error));
  };

  // Get's invoked when the login/registration
  // form is submitted
  handleLogin = (data) => {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user,
    });
  };

  // Once the component is mounted
  // it runs checkLoginStatus to check there is
  // already a cookie in the browser
  componentDidMount() {
    this.checkLoginStatus();
  }

  // Get invoked when the log out button is clicked,
  // modifies the state and gets rid of the user object
  handleLogout = () => {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    });
  };

  // Renders two child components: Home and Dashboard
  render() {
    const { status, user } = this.state;
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route
              exact
              path={"/"}
              render={(props) => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={status}
                />
              )}
            />
            <Route
              exact
              path={"/dashboard"}
              render={(props) => (
                <Dashboard
                  {...props}
                  handleLogout={this.handleLogout}
                  loggedInStatus={status}
                  user={user}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

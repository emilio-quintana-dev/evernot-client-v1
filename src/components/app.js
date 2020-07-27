//              Necesary Imports
// ---------------x--------------------x---------------
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
//              Custom Component
// ---------------x--------------------x---------------
import Home from "./Home";
import Dashboard from "./Dashboard";
import ErrorSnackbar from "./ErrorSnackbar";
//              Actions
// ---------------x--------------------x---------------
import { loginUser } from "../actions/loginUser";
import { logoutUser } from "../actions/logoutUser";

//              Main Component
// ---------------x--------------------x---------------
class App extends Component {
  constructor() {
    super();

    this.state = {
      showSnackbar: false,
    };
  }

  //              Checks for cookies
  // ---------------x--------------------x---------------
  componentDidMount() {
    this.checkLoginStatus();
  }

  checkLoginStatus = () => {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then((response) => {
        if (
          response.data.logged_in &&
          this.props.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.props.loginUser(response.data.user);
        } else if (
          !response.data.logged_in &&
          this.props.loggedInStatus === "LOGGED_IN"
        ) {
          this.props.logoutUser();
        }
      })
      .catch((error) => console.log("Error", error));
  };

  //              Sends LOGIN action to store
  // ---------------x--------------------x---------------
  handleLogin = (data) => {
    this.props.loginUser(data.user);
  };

  //              Sends LOGOUT action to store
  // ---------------x--------------------x---------------
  handleLogout = () => {
    this.props.logoutUser();
  };

  //      Displays SnackBar if there is a login error
  // ---------------x--------------------x---------------
  displaySnackbar = () => {
    this.setState({
      showSnackbar: true,
    });

    setTimeout(() => {
      this.setState({ showSnackbar: false });
    }, 5000);
  };

  render() {
    const { loggedInStatus, user } = this.props;
    return (
      <div className="app">
        {this.state.showSnackbar ? <ErrorSnackbar /> : null}
        <Router>
          <Switch>
            <Route
              exact
              path={"/login"}
              render={(props) => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={loggedInStatus}
                  displaySnackbar={this.displaySnackbar}
                />
              )}
            />
            <Route
              path={"/notes"}
              render={(routerProps) => (
                <Dashboard
                  {...routerProps}
                  handleLogout={this.handleLogout}
                  loggedInStatus={loggedInStatus}
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

//              Reading Access to Store
// ---------------x--------------------x---------------
const mapStateToProps = (state) => {
  return {
    loggedInStatus: state.loggedInStatus,
    user: state.user,
  };
};

export default connect(mapStateToProps, { loginUser, logoutUser })(App);

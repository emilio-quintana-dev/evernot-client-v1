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
import SuccessSnackbar from "./SuccessSnackbar";
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
      showErrorSnackbar: false,
    };
  }

  //              Checks for cookies
  // ---------------x--------------------x---------------
  componentDidMount() {
    const api = "http://localhost:3001/logged_in";
    axios
      .get(api, { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          this.props.loginUser(response.data.user);
        } else if (!response.data.logged_in) {
          this.props.logoutUser();
        }
      })
      .catch((error) => console.log("Error: ", error));
  }

  //   Sends LOGIN action to store when the form is submitted
  // ---------------x--------------------x---------------
  handleLogin = (data) => {
    this.props.loginUser(data.user);
  };

  //   Sends LOGOUT action to store when user clicks log out button
  // ---------------x--------------------x---------------
  handleLogout = () => {
    this.props.logoutUser();
  };

  //      Displays SnackBar if there is a login error
  // ---------------x--------------------x---------------
  displayErrorSnackbar = () => {
    this.setState({
      showErrorSnackbar: true,
    });

    setTimeout(() => {
      this.setState({ showErrorSnackbar: false });
    }, 5000);
  };

  render() {
    const { user } = this.props;
    return (
      <div className="app">
        {this.state.showErrorSnackbar ? <ErrorSnackbar /> : null}
        {this.props.displaySuccessSnackbar ? <SuccessSnackbar /> : null}
        <Router>
          <Switch>
            <Route
              exact
              path={"/login"}
              render={(props) => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  displayErrorSnackbar={this.displayErrorSnackbar}
                />
              )}
            />
            <Route
              path={"/notes"}
              render={(routerProps) => (
                <Dashboard
                  {...routerProps}
                  handleLogout={this.handleLogout}
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
    user: state.user,
    displaySuccessSnackbar: state.displaySuccessSnackbar,
  };
};

export default connect(mapStateToProps, { loginUser, logoutUser })(App);

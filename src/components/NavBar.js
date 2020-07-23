import React, { Component } from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";

class NavBar extends Component {
  render() {
    return (
      <div>
        <AppBar title="My App">
          <Toolbar variant="dense">
            <Tab label={`Welcome👋  ${this.props.user.email}`} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default NavBar;

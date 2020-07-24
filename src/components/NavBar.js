import React, { Component } from "react";
import { AppBar, Tab, Toolbar, Typography } from "@material-ui/core";

// Should be a stateless functional component

// Maybe use another navbar ? this one doesn't fit right
class NavBar extends Component {
  render() {
    return (
      <div>
        <AppBar title="My App" style={{ height: "75px", padding: "10px" }}>
          <Toolbar variant="dense">
            <Typography variant="h4">{this.props.user.email}</Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default NavBar;

import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

const NavBar = (props) => {
  return (
    <AppBar
      title="My App"
      style={{ height: "75px", padding: "10px", backgroundColor: "#17252A" }}
    >
      <Toolbar variant="dense">
        <Typography
          style={{
            fontSize: "25px",
            color: "#FFF",
            marginRight: "10px",
            flexGrow: 1,
          }}
        >
          Notify •••
        </Typography>

        <Button
          onClick={props.handleNewClick}
          variant="contained"
          style={{
            fontSize: "15px",
            marginRight: "10px",
          }}
        >
          New Note
        </Button>
        <Button
          variant="contained"
          onClick={props.handleLogoutClick}
          style={{ fontSize: "15px" }}
        >
          Log out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

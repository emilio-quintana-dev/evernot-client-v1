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
            fontSize: "30px",
            color: "#FFF",
            marginRight: "10px",
            flexGrow: 1,
          }}
        >
          Notify •••
        </Typography>
        <Button
          variant="contained"
          onClick={props.handleLogoutClick}
          style={{ fontSize: "20px" }}
        >
          Log out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

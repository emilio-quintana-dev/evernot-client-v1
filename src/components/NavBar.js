import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import SearchBar from "../components/SearchBar";

const NavBar = (props) => {
  return (
    <AppBar
      title="My App"
      style={{ height: "75px", padding: "10px", backgroundColor: "#1a2734" }}
    >
      <Toolbar variant="dense">
        <NavLink to="/notes" style={{ flexGrow: 1 }}>
          <Typography
            style={{
              fontSize: "30px",
              marginRight: "10px",
              color: "#FFF",
            }}
          >
            <span style={{ color: "#66e2d5" }}>&lt;</span>
            NOTE
            <span style={{ color: "#66e2d5" }}>&gt;</span>
          </Typography>
        </NavLink>

        <SearchBar />

        <Button
          onClick={props.handleNewClick}
          variant="contained"
          style={{
            fontSize: "15px",
            marginRight: "10px",
            backgroundColor: "#8d949b",
          }}
        >
          New Note
        </Button>
        <Button
          variant="contained"
          onClick={props.handleLogoutClick}
          style={{ fontSize: "15px", backgroundColor: "#8d949b" }}
        >
          Log out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

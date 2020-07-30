//                   Necesary Imports
// ---------------x--------------------x---------------
import React from "react";
import { NavLink } from "react-router-dom";
//                    UI Components
// ---------------x--------------------x---------------
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
//                   Custom Components
// ---------------x--------------------x---------------
import SearchBar from "../components/SearchBar";

const NavBar = (props) => {
  //                   Custom Styling
  // ---------------x--------------------x---------------
  const appBarStyle = {
    height: "75px",
    padding: "10px",
    backgroundColor: "#1a2734",
  };

  const logoStyle = {
    fontSize: "30px",
    color: "#FFF",
  };

  const buttonStyle = {
    fontSize: "15px",
    marginRight: "10px",
    backgroundColor: "#8d949b",
  };

  return (
    <AppBar title="My App" style={appBarStyle}>
      <Toolbar variant="dense">
        <NavLink to="/notes" style={{ flexGrow: 1 }}>
          <Typography style={logoStyle}>
            <span style={{ color: "#66e2d5" }}>&lt;</span>
            FlatNote
            <span style={{ color: "#66e2d5" }}>&gt;</span>
          </Typography>
        </NavLink>
        <SearchBar />
        <Button
          onClick={props.handleNewClick}
          variant="contained"
          style={buttonStyle}
        >
          New Note
        </Button>
        <Button
          variant="contained"
          onClick={props.handleLogoutClick}
          style={buttonStyle}
        >
          Log out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

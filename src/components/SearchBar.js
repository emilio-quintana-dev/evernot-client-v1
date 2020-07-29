//                   Necesary Imports
// ---------------x--------------------x---------------
import React, { Component } from "react";
import { connect } from "react-redux";
//                     UI Components
// ---------------x--------------------x---------------
import { InputBase } from "@material-ui/core";
//                        Actions
// ---------------x--------------------x---------------
import { updateQuery } from "../actions/updateQuery";

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      query: "",
    };
  }

  //                     Controlled Input
  // ---------------x--------------------x---------------
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });

    this.props.updateQuery(event.target.value);
  };

  render() {
    //                   Custom Styling
    // ---------------x--------------------x---------------
    const searchStyle = {
      color: "#8d949b",
      padding: "2px",
      paddingLeft: "10px",
      fontSize: "17.5px",
      backgroundColor: "#2e3a48",
      border: "1px solid #444f5b",
      borderRadius: "10px",
      marginRight: "10px",
    };
    return (
      <InputBase
        name="query"
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={this.handleChange}
        style={searchStyle}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    query: state.query,
  };
};

export default connect(mapStateToProps, { updateQuery })(SearchBar);

//                   Necesary Imports
// ---------------x--------------------x---------------
import React, { Component } from "react";
import { connect } from "react-redux";
//                     UI Components
// ---------------x--------------------x---------------
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
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
    return (
      <div
        style={{
          border: "1px solid #FFF",
          maxWidth: "200px",
          padding: "5px",
          marginRight: "10px",
        }}
      >
        <SearchIcon
          style={{
            fontSize: "20px",
            color: "#FFF",
            marginRight: "2px",
            paddingTop: "5px",
          }}
        />
        <InputBase
          name="query"
          style={{ fontSize: "15px", color: "#FFF" }}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    query: state.query,
  };
};

export default connect(mapStateToProps, { updateQuery })(SearchBar);

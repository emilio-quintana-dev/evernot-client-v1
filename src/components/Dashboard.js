import React, { Component } from "react";
import axios from "axios";
import { Typography, Button } from "@material-ui/core";
import NotesContainer from "./NotesContainer";
import Modal from "./Modal";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import { fetchNotes } from "../actions/fetchNotes";
import { deleteNote } from "../actions/deleteNote";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      notes: [],
    };
  }

  handleLogoutClick = () => {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then((response) => {
        this.props.handleLogout();
        this.props.history.push("/");
      })
      .catch((error) => console.log("Error", error));
  };

  componentDidMount() {
    if (this.props.user.id) {
      const userId = this.props.user.id;
      const API = `http://localhost:3001/users/${userId}/notes`;

      fetch(API)
        .then((response) => response.json())
        .then((data) => this.props.fetchNotes(data.notes))
        .catch((error) => console.log(error));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.user.id) {
      const userId = this.props.user.id;
      const API = `http://localhost:3001/users/${userId}/notes`;

      fetch(API)
        .then((response) => response.json())
        .then((data) => this.props.fetchNotes(data.notes))
        .catch((error) => console.log(error));
    }
  }

  //-----------x--------------------------x--------->

  handleDelete = (noteId) => {
    const API = `http://localhost:3001/notes/${noteId}`;
    axios.delete(API).then((response) => console.log(response));
    this.props.deleteNote(noteId);
  };

  toggleForm = () => {
    const newState = !this.state.showNewForm;
    this.setState({
      showNewForm: newState,
    });
  };

  render() {
    console.log("Dashboard Props ----", this.props);
    return (
      <div>
        <NavBar
          user={this.props.user}
          handleLogoutClick={this.handleLogoutClick}
        />
        <Typography
          variant="h1"
          style={{
            marginTop: "100px",
            textAlign: "center",
            color: "#FFF",
            fontWeight: "bold",
            fontSize: "70px",
          }}
        >
          Dashboard
        </Typography>
        <Modal userId={this.props.user.id} />
        <NotesContainer handleDelete={this.handleDelete} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { notes: state.notes };
};

export default connect(mapStateToProps, { fetchNotes, deleteNote })(Dashboard);

import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import NotesContainer from "./NotesContainer";
import NavBar from "./NavBar";
import { Typography } from "@material-ui/core";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      notes: [],
      errorMessages: "",
    };
  }

  handleLogoutClick = () => {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then((response) => {
        this.props.handleLogout();
      })
      .catch((error) => console.log("Error", error));
  };

  componentDidMount() {
    if (this.props.user.id) {
      const userId = this.props.user.id;
      const API = `http://localhost:3001/users/${userId}/notes`;

      fetch(API)
        .then((response) => response.json())
        .then((data) => this.setState({ notes: data.notes }))
        .catch((error) => console.log(error));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.user.id) {
      const userId = this.props.user.id;
      const API = `http://localhost:3001/users/${userId}/notes`;

      fetch(API)
        .then((response) => response.json())
        .then((data) => this.setState({ notes: data.notes }))
        .catch((error) => console.log(error));
    }
  }

  // Makes a delete request to the backend to delete the note
  // and updates the front-end state
  handleDelete = (noteId) => {
    const API = `http://localhost:3001/notes/${noteId}`;
    axios.delete(API).then((response) => console.log(response));

    const updatedNotes = this.state.notes.filter((note) => note.id !== noteId);

    this.setState({
      notes: updatedNotes,
    });
  };

  render() {
    console.log("Done: ", this.state.done);
    return (
      <div>
        <NavBar user={this.props.user} />
        <Typography
          variant="h1"
          style={{ marginTop: "100px", textAlign: "center" }}
        >
          Dashboard
        </Typography>
        <NotesContainer
          notes={this.state.notes}
          done={this.state.done}
          handleDelete={this.handleDelete}
        />
        {/* <Button onClick={this.handleLogoutClick}>Log out</Button> */}
      </div>
    );
  }
}

export default Dashboard;

import React, { Component } from "react";
import Note from "./Note";
import Grid from "@material-ui/core/Grid";
import { Divider } from "@material-ui/core";

class NotesContainer extends Component {
  renderNotes = () => {
    return this.props.notes.map((note) => {
      return <Note note={note} key={note.id} />;
    });
  };
  render() {
    return <div>{this.renderNotes()}</div>;
  }
}

export default NotesContainer;

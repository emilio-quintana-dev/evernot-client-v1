import React, { Component } from "react";
import Note from "./Note";

class NotesContainer extends Component {
  renderNotes = () => {
    return this.props.notes.map((note) => {
      return (
        <Note
          note={note}
          key={note.id}
          handleDelete={this.props.handleDelete}
        />
      );
    });
  };
  render() {
    return <div>{this.renderNotes()}</div>;
  }
}

export default NotesContainer;

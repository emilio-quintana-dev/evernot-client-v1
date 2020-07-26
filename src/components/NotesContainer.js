import React, { Component } from "react";
import Note from "./Note";
import { connect } from "react-redux";

class NotesContainer extends Component {
  renderNotes = () => {
    return this.props.notes.map((note, idx) => {
      return (
        <Note
          key={idx}
          note={note}
          handleDelete={this.props.handleDelete}
          handleDone={this.props.handleDone}
        />
      );
    });
  };
  render() {
    return <div>{this.renderNotes()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, null)(NotesContainer);

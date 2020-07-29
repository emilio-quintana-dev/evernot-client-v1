//                  Necesary Imports
// ---------------x--------------------x---------------
import React from "react";
import { connect } from "react-redux";
//                  Custom Components
// ---------------x--------------------x---------------
import Note from "./Note";
//                  Notes Container Component
// ---------------x--------------------x---------------
const NotesContainer = (props) => {
  return <div>{renderNotes(props)}</div>;
};

const renderNotes = (props) => {
  let filteredNotes = props.notes.filter((note) =>
    note.title.includes(props.query)
  );

  return filteredNotes.map((note, idx) => {
    return (
      <Note
        key={idx}
        note={note}
        handleDelete={props.handleDelete}
        handleDone={props.handleDone}
        history={props.history}
      />
    );
  });
};

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    query: state.query,
  };
};

export default connect(mapStateToProps, null)(NotesContainer);

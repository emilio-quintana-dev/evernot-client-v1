//                  Necesary Imports
// ---------------x--------------------x---------------
import React, { Component } from "react";
import { connect } from "react-redux";
//                  Custom Components
// ---------------x--------------------x---------------
import Note from "./Note";
import { Typography } from "@material-ui/core";

//                  Notes Container Component
// ---------------x--------------------x---------------
const NotesContainer = (props) => {
  return (
    <div>
      <Typography
        variant="h1"
        style={{
          marginTop: "100px",
          marginBottom: "20px",
          textAlign: "center",
          color: "#FFF",
          fontSize: "70px",
          border: "solid 5px",
          borderRadius: "10px",
        }}
      >
        Dashboard
      </Typography>
      {renderNotes(props)}
    </div>
  );
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

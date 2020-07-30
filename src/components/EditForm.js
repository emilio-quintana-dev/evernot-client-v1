//                   Necesary Imports
// ---------------x--------------------x---------------
import React, { Component } from "react";
import axios from "axios";
//                    UI Components
// ---------------x--------------------x---------------
import { Button, Input, FormGroup, Typography } from "@material-ui/core";
//                        Actions
// ---------------x--------------------x---------------
import { connect } from "react-redux";
import { editNote } from "../actions/editNote";

//                   Controlled Form
// ---------------x--------------------x---------------
class EditForm extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      description: "",
    };
  }

  //               Populates the TextFields
  // ---------------x--------------------x---------------
  componentDidMount() {
    const id = parseInt(this.props.match.params.noteId);
    const API = `http://localhost:3001/notes/${id}`;

    axios.get(API).then((response) => {
      const { title, description } = response.data.note;
      this.setState({
        title: title,
        description: description,
      });
    });
  }

  //          Updates backend-frontend and re-directs
  // ---------------x--------------------x---------------
  handleSubmit = (event) => {
    event.preventDefault();
    const id = parseInt(this.props.match.params.noteId);
    const { title, description } = this.state;
    const API = `http://localhost:3001/notes/${id}`;

    axios
      .patch(API, {
        title: title,
        description: description,
      })
      .then((response) => this.props.editNote(response.data.note));

    this.props.history.push("/notes");
  };

  //            Handles changes in controlled form
  // ---------------x--------------------x---------------
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Typography
          variant="h1"
          style={{ marginTop: "100px", marginBottom: "20px", color: "#FFF" }}
        >
          Edit Form:
        </Typography>
        <FormGroup onSubmit={this.handleSubmit} style={{ textAlign: "center" }}>
          <Input
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange}
            required
            style={{
              marginBottom: "10px",
              fontSize: "20px",
              backgroundColor: "#2e3a48",
              border: "1px solid #444f5b",
              borderRadius: "10px",
              color: "#8d949b",
              padding: "2px",
              paddingLeft: "10px",
            }}
          />
          <br />

          <Input
            style={{
              color: "#8d949b",
              fontSize: "20px",
              minWidth: "700px",
              padding: "5px",
              backgroundColor: "#2e3a48",
              border: "1px solid #444f5b",
              borderRadius: "10px",
              padding: "2px",
              paddingLeft: "10px",
            }}
            multiline
            rows={20}
            name="description"
            placeholder="Content"
            value={this.state.description}
            onChange={this.handleChange}
            required
          />

          <br />

          <Button
            style={{
              marginBottom: "10px",
              marginTop: "10px",
              backgroundColor: "#7b78ff",
              fontSize: "20px",
            }}
            variant="contained"
            onClick={this.handleSubmit}
          >
            Update
          </Button>
        </FormGroup>
      </div>
    );
  }
}

export default connect(null, { editNote })(EditForm);

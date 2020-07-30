//                   Necesary Imports
// ---------------x--------------------x---------------
import React, { Component } from "react";
import axios from "axios";
//                    UI Components
// ---------------x--------------------x---------------
import { Button, Input, FormGroup, Typography } from "@material-ui/core";
//                   Controlled Form
// ---------------x--------------------x---------------
class ShowNote extends Component {
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
    const API = `https://limitless-springs-42766.herokuapp.com/notes/${id}`;

    axios.get(API).then((response) => {
      const { title, description } = response.data.note;
      this.setState({
        title: title,
        description: description,
      });
    });
  }

  //            Handles changes in controlled form
  // ---------------x--------------------x---------------
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleClick = (event) => {
    const id = parseInt(this.props.match.params.noteId);

    switch (event.target.innerText) {
      case "BACK":
        this.props.history.push("/notes");

      case "EDIT":
        this.props.history.push(`/notes/${id}/edit`);

      case "DELETE":
        this.props.handleDelete(id);
        this.props.history.push("/notes");
    }
  };

  render() {
    return (
      <div>
        <Typography
          variant="h1"
          style={{ marginTop: "100px", marginBottom: "20px", color: "#FFF" }}
        >
          React Note
        </Typography>
        <FormGroup style={{ textAlign: "center" }}>
          <Input
            disabled
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
            disabled
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
        </FormGroup>
        <Button
          style={{
            marginBottom: "10px",
            marginRight: "10px",
            marginTop: "10px",
            backgroundColor: "#17252A",
            color: "#FFF",
            fontSize: "20px",
          }}
          variant="contained"
          color="primary"
          onClick={this.handleClick}
        >
          Back
        </Button>

        <Button
          style={{
            marginBottom: "10px",
            marginRight: "10px",
            marginTop: "10px",
            backgroundColor: "#17252A",
            color: "#FFF",
            fontSize: "20px",
          }}
          variant="contained"
          color="primary"
          onClick={this.handleClick}
        >
          Edit
        </Button>

        <Button
          style={{
            marginBottom: "10px",
            marginTop: "10px",
            backgroundColor: "#17252A",
            color: "#FFF",
            fontSize: "20px",
          }}
          variant="contained"
          color="primary"
          onClick={this.handleClick}
        >
          Delete
        </Button>
      </div>
    );
  }
}

export default ShowNote;

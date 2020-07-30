import React, { Component } from "react";
import axios from "axios";
import { Button, Input, FormGroup, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { addNote } from "../actions/addNote";
import { displaySuccessSnackbar } from "../actions/displaySuccessSnackbar";

class NewForm extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      description: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, description } = this.state;
    const { userId } = this.props;
    axios
      .post(
        "https://limitless-springs-42766.herokuapp.com/notes/new",
        {
          title: title,
          description: description,
          user_id: userId,
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          this.props.addNote(response.data.note);
          this.props.history.push("/notes");
          this.props.displaySuccessSnackbar();
        } else {
          console.log(response);
        }
      })
      .catch((err) => console.log(err));
  };

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
          Add a new note:
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
            Submit
          </Button>
        </FormGroup>
      </div>
    );
  }
}

export default connect(null, { addNote, displaySuccessSnackbar })(NewForm);

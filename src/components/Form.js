import React, { Component } from "react";
import axios from "axios";
import { Button, Input, FormGroup } from "@material-ui/core";
import { connect } from "react-redux";
import { addNote } from "../actions/addNote";

class Form extends Component {
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
        "http://localhost:3001/notes/new",
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
          this.props.handleClose();
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
        <FormGroup
          onSubmit={this.handleSubmit}
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          <Input
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange}
            required
            style={{ marginBottom: "10px", fontSize: "20px" }}
          />
          <br />

          <Input
            type="text"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleChange}
            required
            style={{ marginBottom: "10px", fontSize: "20px" }}
          />
          <br />

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
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        </FormGroup>
      </div>
    );
  }
}

export default connect(null, { addNote })(Form);

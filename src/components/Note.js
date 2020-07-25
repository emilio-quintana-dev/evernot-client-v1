import React, { Component } from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";

class Note extends Component {
  constructor() {
    super();

    this.state = {
      isDone: false,
    };
  }

  toggleDone = () => {
    const newState = !this.state.isDone;
    this.setState({
      isDone: newState,
    });
  };

  render() {
    const { id, description, done } = this.props.note;
    console.log("Note props", this.props);
    return (
      <div>
        <Card
          style={{
            marginTop: "20px",
            padding: "2.5px",
            textAlign: "center",
          }}
        >
          <CardContent>
            <Typography variant="h4">{description}</Typography>
          </CardContent>

          <CardActions>
            <Button
              onClick={() => this.props.handleDelete(id)}
              variant="outlined"
              color="secondary"
              size="medium"
            >
              Delete
            </Button>

            {!this.state.isDone ? (
              <Button
                onClick={this.toggleDone}
                variant="outlined"
                color="primary"
                size="medium"
              >
                Mark as done
              </Button>
            ) : (
              <Button variant="contained" size="medium" disabled>
                Done!
              </Button>
            )}
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Note;

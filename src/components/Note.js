import React, { Component } from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  CardActionArea,
} from "@material-ui/core";

class Note extends Component {
  render() {
    const { id, description } = this.props.note;
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
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Note;

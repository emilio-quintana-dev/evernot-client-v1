import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class Note extends Component {
  render() {
    const { description } = this.props.note;
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
            <Typography variant="body2">{description}</Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Note;

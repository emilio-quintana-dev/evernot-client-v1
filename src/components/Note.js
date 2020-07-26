// import React, { Component } from "react";
// import {
//   Typography,
//   Button,
//   Card,
//   CardContent,
//   CardActions,
// } from "@material-ui/core";

// class Note extends Component {
//   constructor() {
//     super();
//   }

//   render() {
//     const { id, description } = this.props.note;
//     return (
//       <div>
//         <Card
//           style={{
//             marginTop: "20px",
//             padding: "2.5px",
//             textAlign: "center",
//           }}
//         >
//           <CardContent>
//             <Typography variant="h4">{description}</Typography>
//           </CardContent>

//           <CardActions>
//             <Button
//               onClick={() => this.props.handleDelete(id)}
//               variant="outlined"
//               color="secondary"
//               size="medium"
//             >
//               Delete
//             </Button>
//           </CardActions>
//         </Card>
//       </div>
//     );
//   }
// }

// export default Note;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 400,
    marginBottom: 25,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function Note(props) {
  console.log("Note Props ---", props.note);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { id, title, description, done } = props.note;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          variant="h4"
          color="textSecondary"
          style={{ fontSize: "20px" }}
        >
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="delete" onClick={() => props.handleDelete(id)}>
          <DeleteIcon fontSize="large" />
        </IconButton>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography
            color="textPrimary"
            style={{ fontSize: "20px" }}
            paragraph
          >
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

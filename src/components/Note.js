//                  Necesary Imports
// ---------------x--------------------x---------------
import React from "react";
import clsx from "clsx";
//                    UI Components
// ---------------x--------------------x---------------
import {
  Typography,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Card,
  makeStyles,
  Button,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//                    Custom Styling
// ---------------x--------------------x---------------
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
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { id, title, description, done } = props.note;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleEdit = (id) => {
    props.history.push(`/notes/${id}/edit`);
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
        {done ? (
          <Button
            onClick={() => props.handleDone(props.note)}
            variant="contained"
            style={{ fontSize: "12.5px" }}
          >
            Done
          </Button>
        ) : (
          <Button
            onClick={() => props.handleDone(props.note)}
            variant="contained"
            style={{ fontSize: "12.5px" }}
          >
            Mark as done
          </Button>
        )}

        <Button
          onClick={() => handleEdit(id)}
          variant="contained"
          style={{ fontSize: "12.5px", marginLeft: "10px" }}
        >
          Edit
        </Button>

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

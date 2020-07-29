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
import EmailIcon from "@material-ui/icons/Email";

//                    Custom Styling
// ---------------x--------------------x---------------
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 500,
    maxWidth: 500,
    marginBottom: 25,
    backgroundColor: "#1a2734",
    border: "2px solid #2e0639",
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
  const { id, title, description, done, created_at } = props.note;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleEdit = (id) => {
    props.history.push(`/notes/${id}/edit`);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography style={{ fontSize: "22.5px", color: "#FFF" }}>
          <span style={{ fontSize: "22.5px", color: "#737c85" }}>Title: </span>
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="delete" onClick={() => props.handleDelete(id)}>
          <DeleteIcon
            fontSize="large"
            style={{ color: "rgb(255 255 255 / 80%)" }}
          />
        </IconButton>
        <IconButton aria-label="email" onClick={() => props.handleEmail(id)}>
          <EmailIcon
            fontSize="large"
            style={{ color: "rgb(255 255 255 / 80%)" }}
          />
        </IconButton>
        {done ? (
          <Button
            onClick={() => props.handleDone(props.note)}
            variant="contained"
            style={{
              fontSize: "15px",
              backgroundColor: "#2e0639",
              color: "#FFF",
            }}
          >
            Done
          </Button>
        ) : (
          <Button
            onClick={() => props.handleDone(props.note)}
            variant="contained"
            style={{
              fontSize: "15px",
              backgroundColor: "#2e0639",
              color: "#FFF",
            }}
          >
            Mark as done
          </Button>
        )}

        <Button
          onClick={() => handleEdit(id)}
          variant="contained"
          style={{
            fontSize: "15px",
            marginLeft: "10px",
            backgroundColor: "#2e0639",
            color: "#FFF",
          }}
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
          <ExpandMoreIcon
            fontSize="large"
            style={{ color: "rgb(255 255 255 / 80%)" }}
          />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography
            color="textPrimary"
            style={{ fontSize: "20px", color: "#FFF" }}
            paragraph
          >
            {description}
          </Typography>

          <Typography
            color="textPrimary"
            style={{ fontSize: "17.5px", color: "#737c85" }}
            paragraph
          >
            Created at: {created_at}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

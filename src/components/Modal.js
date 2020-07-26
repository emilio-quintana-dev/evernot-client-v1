import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Button, Typography } from "@material-ui/core";
import Form from "./Form";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: "#FFF",
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography
        variant="h2"
        style={{ marginTop: "10px", marginBottom: "10px" }}
      >
        Add new note
      </Typography>
      <Form handleClose={handleClose} userId={props.userId} />
    </div>
  );

  return (
    <div>
      <Button
        style={{
          marginBottom: "10px",
          marginTop: "10px",
          backgroundColor: "#17252A",
          color: "#FFF",
          fontSize: "20px",
        }}
        onClick={handleOpen}
      >
        New Note
      </Button>
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

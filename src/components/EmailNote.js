import React from "react";
import emailjs from "emailjs-com";
import { IconButton } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";

export default function EmailNote(props) {
  const { title, description, created_at } = props.note;
  var template_params = {
    title: title,
    description: description,
    created_at: created_at,
  };

  var service_id = "default_service";
  var template_id = "contact_form";
  var user_id = "user_0s0p6hVDhQaHTDwYYA0vo";

  function sendEmail() {
    emailjs.send(service_id, template_id, template_params, user_id);
  }

  return (
    <div>
      <IconButton aria-label="email" onClick={sendEmail}>
        <EmailIcon
          fontSize="large"
          style={{ color: "rgb(255 255 255 / 80%)" }}
        />
      </IconButton>
    </div>
  );
}

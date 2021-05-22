import React from "react";
import { Close } from "@material-ui/icons";
import "./style.css";
import { Button } from "@material-ui/core";

function SendMail() {
  return (
    <div className="SendMail">
      <div className="SendMail__header">
        <h3>New Message</h3>
        <Close className="SendMail__close" />
      </div>

      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <div className="sendmail__options">
          <Button>Send</Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;

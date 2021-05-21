import React from "react";
import { useHistory } from "react-router";
import { Checkbox, IconButton } from "@material-ui/core";
import { StarBorderOutlined, LabelImportantOutlined } from "@material-ui/icons";
import "./style.css";

function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory();
  return (
    <div className="emailRow" onClick={() => history.push("/mail")}>
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject} -
          <span className="emailRow__description">{description}</span>
        </h4>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
}

export default EmailRow;

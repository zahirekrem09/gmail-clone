import React from "react";
import { useHistory } from "react-router";
import { IconButton } from "@material-ui/core";
import {
  ArrowBack,
  MoveToInbox,
  Error,
  Delete,
  Email,
  WatchLater,
  CheckCircle,
  LabelImportant,
  MoreVert,
  UnfoldMore,
  Print,
  ExitToApp,
} from "@material-ui/icons";
import "./mail.css";

function Mail() {
  const history = useHistory();
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => history.goBack()}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <MoveToInbox />
          </IconButton>
          <IconButton>
            <Error />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <Email />
          </IconButton>
          <IconButton>
            <WatchLater />
          </IconButton>
          <IconButton>
            <CheckCircle />
          </IconButton>
          <IconButton>
            <LabelImportant />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <Print />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail_bodyHeader">
          <h2>Subject</h2>
          <LabelImportant className="mail__important" />
          <p>Title</p>
          <p className="mail___time">10pm</p>
        </div>
        <div className="mail__message">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis,
            iste dolore? Pariatur minima commodi molestiae corporis quibusdam
            ipsa nesciunt non tenetur aliquid temporibus accusamus fugiat quidem
            perferendis, aspernatur delectus cum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mail;

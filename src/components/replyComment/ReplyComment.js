import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import "./ReplyComment.css";

const ReplyComment = ({ avatar }) => {
  return (
    <div className="container">
      <Avatar src={avatar} />
      <input
        type="text"
        placeholder="Add a comment..."
        className="text__field"
      />
      <Button className="send__button" variant="contained">
        Send
      </Button>
    </div>
  );
};

export default ReplyComment;

import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ReplyIcon from "@mui/icons-material/Reply";
import Avatar from "@mui/material/Avatar";

import "./Comment.css";

const Comment = ({ avatar, name, time, comment, reply }) => {
  const [upvote, setUpvote] = useState(0);

  return (
    <div className={reply ? "reply-container" : "container"}>
      <div className="leftside">
        <AddIcon
          className="icon"
          onClick={() => setUpvote((prevState) => prevState + 1)}
        />
        <span className="upvote dark__blue">{upvote}</span>
        <RemoveIcon
          className="icon"
          onClick={() => setUpvote((prevState) => prevState - 1)}
        />
      </div>
      <div className="rightside">
        <div className="rightside__header">
          <div className="left">
            <Avatar
              alt="profile picture"
              src={""}
              onClick={() => console.log(avatar)}
            />
            <div className="username">{name}</div>
            <div className="time__sent">{time}</div>
          </div>
          <div className="right">
            <ReplyIcon className="dark__blue" />
            <div className="reply__button dark__blue">Reply</div>
          </div>
        </div>
        <div className="rightside__body">{comment}</div>
      </div>
    </div>
  );
};

export default Comment;

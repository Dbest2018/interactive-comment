import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ReplyIcon from "@mui/icons-material/Reply";
import Avatar from "@mui/material/Avatar";

import image from "../../images/avatars/image-amyrobson.png";

import "./comment.css";

const comment = ({ avatar, name, time, comment }) => {
  return (
    <div className="container">
      <div className="leftside">
        <AddIcon className="icon" />
        <span className="upvote dark__blue">12</span>
        <RemoveIcon className="icon" />
      </div>
      <div className="rightside">
        <div className="rightside__header">
          <div className="left">
            <Avatar alt="profile picture" src={avatar} />
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

export default comment;

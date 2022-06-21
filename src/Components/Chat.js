import { AttachFile, MoreVert, SearchOutlined } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./Chat.css";
const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar />
        <div className="chat-header-info">
          <h3>Contact Name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat-header-right">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat-body"></div>
      <div className="chat-footer"></div>
    </div>
  );
};

export default Chat;

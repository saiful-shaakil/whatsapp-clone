import { Avatar } from "@mui/material";
import React from "react";
import "./sidebarChat.css";

const SidebarChat = ({ addNewChat }) => {
  const createChat = () => {
    const roomName = prompt("Please enter name for chat");

    if (roomName) {
      ///
    }
  };
  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebar-chat-info">
        <h3>Contact Name</h3>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <div className="sidebar-chat-info">
        <h3>Add New Chat</h3>
      </div>
    </div>
  );
};

export default SidebarChat;

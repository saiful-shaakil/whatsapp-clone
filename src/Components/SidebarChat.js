import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import db from "./firebase.init";
import "./sidebarChat.css";

const SidebarChat = ({ addNewChat, name }) => {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 6000000));
  }, []);
  const createChat = () => {
    const roomName = prompt("Please enter name for chat");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };
  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} />
      <div className="sidebar-chat-info">
        <h3>{name}</h3>
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

import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Chat.css";
import db from "./firebase.init";
const Chat = () => {
  const { roomId } = useParams();
  const [input, setInput] = useState("");
  const [roomName, setRoomName] = useState("");
  console.log(
    db
      .collection("rooms")
      .doc(roomId)
      .onSnapshot((snapshot) => snapshot)
  );

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.name));
    }
  }, []);
  const sendMessage = (e) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar />
        <div className="chat-header-info">
          <h3>{roomName}</h3>
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
      <div className="chat-body">
        <p className={`chat-message ${true && "chat-receiver"}`}>
          <span className="chat-name">Shahin Abrar</span>
          Hey Guys <span className="chat-time">5:32 pm</span>
        </p>
      </div>
      <div className="chat-footer">
        <InsertEmoticon />
        <form>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
            name=""
            id=""
          />
          <button type="submit" onClick={sendMessage}>
            Send a message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
};

export default Chat;

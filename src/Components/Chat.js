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
import firebase from "firebase/compat/app";
import db from "./firebase.init";
import { useStateValue } from "./StateProvider";
const Chat = () => {
  const [{ user }, dispatch] = useStateValue();
  const { roomId } = useParams();

  const [input, setInput] = useState("");
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar />
        <div className="chat-header-info">
          <h3>{roomName}</h3>
          <p>
            Last seen at{" "}
            {new Date(messages[messages.length - 1]?.timestamp?.toDate())
              .toUTCString()
              .slice(16, 29)}
          </p>
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
        {messages.map((message) => (
          <p
            key={message?.timestamp?.nanoseconds}
            className={`chat-message ${
              message?.name === user?.displayName && "chat-receiver"
            }`}
          >
            <span className="chat-name">{message?.name}</span>
            {message?.message}
            <span className="chat-time">
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
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

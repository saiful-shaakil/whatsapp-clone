import { Chat, DonutLarge, MoreVert } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar />
        <div className="sidebar-header-right">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar-search"></div>
      <div className="sidebar-chat"></div>
    </div>
  );
};

export default Sidebar;

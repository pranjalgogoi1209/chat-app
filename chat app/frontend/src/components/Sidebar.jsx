/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Sidebar.module.css";
import { IconButton } from "@mui/material";
import ConversationTemplate from "./parts/ConversationTemplate";

const Sidebar = (props) => {

  const navigate = useNavigate();
  const chats = props.userDetails.chats ? props.userDetails.chats : [];
  let [conversations, setConversations] = useState(chats);
  useEffect(()=>{
    setConversations(chats);
  }, [chats])
    // let [conversations, setConversations] = useState([
    //   {
    //     name: "Test#1",
    //     lastMessage: "loremksdljlsjflsdj",
    //     timeStamp: "today"
    //   },
    //   {
    //     name: "Test#2",
    //     lastMessage: "loremksdljlsjflsdj",
    //     timeStamp: "today"
    //   },
    //   {
    //     name: "Test#2",
    //     lastMessage: "loremksdljlsjflsdj",
    //     timeStamp: "today"
    //   }
    // ])
    return (
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <div>
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
          </div>
          <div>
            <IconButton
              onClick={() => {
                navigate;
              }}>
              <PersonAddIcon />
            </IconButton>
            <IconButton>
              <GroupAddIcon />
            </IconButton>
            <IconButton>
              <AddCircleIcon />
            </IconButton>
            <IconButton>
              <NightlightIcon />
            </IconButton>
          </div>
        </div>
        <div className={styles.searchbar}>
          <SearchIcon />
          <input
            type="text"
            className={styles.searchinput}
            placeholder="Search"
          />
        </div>
        <div className={styles.conversations}>
          {conversations.map((item) => {
            return <ConversationTemplate item={item} />;
          })}
        </div>
      </div>
    );
};

export default Sidebar;

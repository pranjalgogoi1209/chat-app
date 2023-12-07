import React from 'react'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from '@mui/material';
import styles from "./ConversationTemplate.module.css";

const ConversationTemplate = (props) => {
  const iconStyle = {
    fontSize: "2rem", 
  };
  return (
    <div className={styles.whole}>
      <IconButton>
        <div className={styles.icon}>{props.item.name[0]}</div>
      </IconButton>
      <div className={styles.messageArea}>
        <div>{props.item.name}</div>
        <div className={styles.lowerrow}>
          <div>{props.item.lastMessage}</div>
          <div>{props.item.timeStamp}</div>
        </div>
      </div>
    </div>
  );
}

export default ConversationTemplate

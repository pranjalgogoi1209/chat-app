import React from 'react'
import styles from "./ChatArea.module.css"
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from '@mui/material';
import MessageSender from './parts/MessageSender';
import MessageSelf from './parts/MessageSelf';


const ChatArea = () => {
  let props1 = {
    sender: "shivam",
    message: "<div className={styles.chatAreaInput}",
    timeStamp : "12:00am"
  };
  let props2 = {
    message: "<div className={styles.chatAreaInput}",
    timeStamp : "12:00am"
  };
  
  return (
    <div className={styles.chatArea}>
      <div className={styles.chatAreaHeader}>
        <div>
          {" "}
          <IconButton>
            <div className={styles.icon}>{"T"}</div>
          </IconButton>
        </div>
        <div className={styles.chatAreaHeaderUser}>
          <div className={styles.chatAreaHeaderUserName}>Text#1</div>
          <div className={styles.chatAreaHeaderUserTime}>timeStamp</div>
        </div>
        <div>
          <IconButton>
            <DeleteIcon style={{ fontSize: "2rem" }} />
          </IconButton>
        </div>
      </div>
      <div className={styles.chatAreaMain}>
        <MessageSender data={props1}/>
        <MessageSelf data = {props2} />
        <MessageSender data={props1}/>
        <MessageSelf data = {props2} />
        <MessageSender data={props1}/>
        <MessageSelf data = {props2} />
        <MessageSender data={props1}/>
        <MessageSelf data = {props2} />
        <MessageSender data={props1}/>
        <MessageSelf data = {props2} />
      </div>
      <div className={styles.chatAreaInput}>
        <input type='text' className={styles.chatAreaInputBox} placeholder='Type Your Message Here'/>
        <IconButton>
            <SendIcon style={{fontSize:"2rem"}}/>
        </IconButton>
      </div>
    </div>
  );
}

export default ChatArea

import React from 'react'
import styles from "./MessageSender.module.css"
const MessageSender = (props) => {
  return (
    <div className={styles.fullmessage}>
      <div className={styles.icon}>{props.data.sender[0]}</div>
      <div className={styles.textArea}>
        <div className={styles.senderName}>{props.data.sender}</div>
        <div className={styles.message}>{props.data.message}</div>
        <div className={styles.time}>{props.data.timeStamp}</div>
      </div>
    </div>
  );
}

export default MessageSender

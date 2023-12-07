import React from 'react'
import styles from "./MessageSelf.module.css"

const MessageSelf = (props) => {
  return (
    <div>
      <div className={styles.fullmessage}>
        <div className={styles.textArea}>
          <div className={styles.message}>{props.data.message}</div>
          <div className={styles.time}>{props.data.timeStamp}</div>
        </div>
      </div>
    </div>
  );
}

export default MessageSelf

import React from 'react'
import styles from "./Welcome.module.css"

const Welcome = (props) => {
  return (
    <div className={styles.container}>
        <div className={styles.description}>Welcome {props.user }</div>
        <img src="/images/logo.png" className={styles.image}/>
        <div className={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eius exercitationem et </div>
    </div>
  )
}

export default Welcome;

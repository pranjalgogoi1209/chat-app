import React, {useEffect, useState} from 'react'
import {Outlet} from "react-router-dom"
import styles from "./MainContainer.module.css";
import Sidebar from './Sidebar';

import { useNavigate } from "react-router-dom";


const MainContainer = (props) => {
  let [chats, setChats ] = useState([]);
  const navigate = useNavigate();

   useEffect(()=>{
     if (props.user=="") {
      console.log("here")
      setInterval(()=>{
        navigate("/signup");
      }, 2000)
    }
    else{
      console.log(props.user)
      fetch(`http://localhost:3001/chats/getChats/${props.user}`)
        .then((response) => response.json())
        .then((data) => props.setUserDetails(data.user))
        .catch((error) => console.log(error));
    }
   }, [])
  return (
    <div className={styles.maincontainer}>
      <Sidebar userDetails={props.userDetails} />
      <Outlet />
    </div>
  );
}

export default MainContainer

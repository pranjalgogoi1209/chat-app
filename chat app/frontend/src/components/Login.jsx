import React, { useState } from 'react'
import styles from "./Login.module.css"
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';


const Login = (props) => {

  let [name, setName] = useState("");
  let [number, setNumber] = useState("");
  let [password, setPassword] = useState("");
  let [passwordError, setPasswordError] = useState("");
  let [signIn, setSignIn] = useState(true);

  const navigate = useNavigate();

  const signUpApi = () => {
    const data = {
      name, number, password
    }
    const options = {
      method : "POST",
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(data)
    }
    fetch("http://localhost:3001/user/signup", options)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      if(result.code == 404) setPasswordError("User by this number already exists, try another number or sign In")
      else {
        props.setUser(number)
        console.log('here')
        navigate("../")
      }
    })
    .catch(error => {return false});
  }

  const signInApi = () => {
    const data = {
      number,
      password,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("http://localhost:3001/user/signin", options)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.code == 404)
          setPasswordError(
            "password didn't match..."
          );
        else {
          props.setUser(number);
          navigate("../");
        }
      })
      .catch((error) => {
        console.log(error)
        setPasswordError("baad me aana, abhi dikkat hai")
      });
  }

  const signUpSubmitHandler = () => {
    if(name.length==0) setPasswordError("name can not be left empty...")
    else if(number.length!=10) setPasswordError("Number must be 10 digit...")
    else if(password.length < 5) setPasswordError("Password must have minimum of 5 characters...")
    else signUpApi();
  }
  const signInSubmitHandler = () => {
    if(number.length!=10) setPasswordError("Number must be 10 digit...")
    else if(password.length < 5) setPasswordError("Password must have minimum of 5 characters...")
    else signInApi();
  }

  const signin = (
    <form className={styles.form}>
      <div className={styles.welcomeMsg}>Welcome to TextTango</div>
      <TextField
        id="standard-basic"
        label="Number"
        type="number"
        variant="standard"
        className={styles.textfield}
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <TextField
        id="standard-basic"
        type="password"
        label="Password"
        variant="standard"
        className={styles.textfield}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button
        variant="outlined"
        className={styles.button}
        onClick={signInSubmitHandler}>
        Login
      </Button>
      <p>
        Do Not have an account,{" "}
        <span
          className={styles.toggleLink}
          onClick={() => setSignIn(!signIn)}>
          Sign up!
        </span>
      </p>
      <p style={{ color: "red" }}>{passwordError}</p>
    </form>
  );

  const signup = (
    <form className={styles.form}>
      <div className={styles.welcomeMsg}>Welcome to TextTango</div>
      <TextField
        id="standard-basic"
        label="Name"
        variant="standard"
        className={styles.textfield}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <TextField
        id="standard-basic"
        label="Number"
        type="number"
        variant="standard"
        className={styles.textfield}
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <TextField
        id="standard-basic"
        type="password"
        label="Password"
        variant="standard"
        className={styles.textfield}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button
        variant="outlined"
        className={styles.button}
        onClick={signUpSubmitHandler}>
        Login
      </Button>
      <p>
        Already have an account, <span className={styles.toggleLink} onClick={()=>setSignIn(!signIn)}>Sign In!</span>
      </p>
      <p style={{ color: "red" }}>{passwordError}</p>
    </form>
  );

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img
          src="/images/logo.png"
          alt=""
        />
      </div>
      {signIn && signin}
      {!signIn && signup}
    </div>
  );
}

export default Login

import React from "react";
import "./Login.scss";
import Button from "@mui/material/Button";
import { MdAccountCircle } from "react-icons/md";
import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";



function Login(props) {

  function getValue(event) {
    event.preventDefault();
    if(userName.value === "jonathan" && passWord.value === "qwerty"){
    alert("logged on")
    } else{
      alert("wrong password")
    }
  }



  return (
    <section>
      <MdAccountCircle />
      <h3>Sign in</h3>
      <Box
        className="formfield"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <InputLabel htmlFor="component-outlined">Username</InputLabel>
        <Input
          type="text"
          id="userName"
          autoComplete="username"
          aria-describedby="component-error-text"
        />
        <InputLabel htmlFor="component-outlined">Password</InputLabel>
        <Input
          type="password"
          id="passWord"
          autoComplete="current-password"
          aria-describedby="component-error-text"
        />

        <FormControlLabel control={<Checkbox />} label="Remember Me" />
        <Button
          variant="contained"
          type="submit"
          onClick={getValue}
        >
          Sign In
        </Button>
      </Box>
      <div className="aLinks">
        <a href="#" onClick={() => props.changeLogin(false)}>
          Forgot password?
        </a>
        <a href="#">Don't have an account? Sign Up</a>
      </div>
    </section>
  );
}

 


export default Login;

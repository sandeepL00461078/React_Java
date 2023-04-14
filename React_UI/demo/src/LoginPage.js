import React, { useState,useEffect } from 'react';
import './DemographicForm.css';
import { useNavigate } from 'react-router-dom';
//import axios from "axios";
function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [formValid, setFormValid] = useState(false);
    const navigate = useNavigate();
    
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
  
    const handleUsername = (event) => {
      const temp = event.target.value.trim();
      setUsername(temp);
  
      if (temp === '') {
        setUsernameError('Username is required');
        setFormValid(false);
      } else {
        setUsernameError('');
        setFormValid(password !== '' && temp !== '');
      }
    };
  
    const handlePassword = (event) => {
      const temp = event.target.value.trim();
      setPassword(temp);
  
      if (temp === '') {
        setPasswordError('Password is required');
        setFormValid(false);
      } else if (temp.length < 6) {
        setPasswordError('Password must be at least 6 characters long');
        setFormValid(false);
      } else {
        setPasswordError('');
        setFormValid(username !== '' && temp !== '');
      }
    };

    const handleClickButton1 = () => {
      const login={username,password}
      console.log(login);
      console.log(`Username: ${username}, Password: ${password}`);
      fetch("http://localhost:8080/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(login)
      })
      navigate("/Success");
    };
  
    const handleClickButton2 = () => {
      navigate("/DemographicForm");
            
    };

    // async function handleClickButton1(event){
    //   event.preventDefault();
    //   try{
    //     await axios.post
    //   }
    // }
    return (
      <form className="form-container">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsername}
          />
          {usernameError && <span className="error">{usernameError}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
          />
          {passwordError && <span className="error">{passwordError}</span>}
        </div>
        <button type="submit" disabled={!formValid} onClick={handleClickButton1}>Sign in </button>
        <b> </b>
        <button type="signup" onClick={handleClickButton2}>Sign Up</button>
      </form>
    );
  }
  export default LoginPage
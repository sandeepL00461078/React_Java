import React, { useState,useEffect } from 'react';
import './DemographicForm.css';
import LoginPage from './LoginPage';
import { useNavigate } from 'react-router-dom';

function DemographicForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [formValid, setFormValid] = useState(false);
  const navigate = useNavigate();

  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [fullnameError, setFullNameError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [genderError, setGenderError] = useState('');
  const [cityError, setCityError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleUsername = (event) => {
    setUsername(event.target.value);
  
    if (event.target.value === '') {
      setUsernameError('Username is required');
      setFormValid(false);
    } else {
      setUsernameError('');
      setFormValid(password !== '' && username !== '' && fullname !== '' && age !== '' && gender !== '' && city !== '' && country !== '' && email !== '');
      
    }
  };
  
  const handlePassword = (event) => {
    setPassword(event.target.value);
  
    if (event.target.value === '') {
      setPasswordError('Password is required');
      setFormValid(false);
    } else if (event.target.value.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      setFormValid(false);
    } else {
      setPasswordError('');
     // setFormValid(username !== '' && temp !== '');
     setFormValid(username !== '' && password !== '' && fullname !== '' && age !== '' && gender !== '' && city !== '' && country !== '' && email !== '');
    }
  };
  
  const handleFullName = (event) => {
    setFullName(event.target.value);
  
    if (event.target.value === '') {
      setFullNameError('Full Name is required');
      setFormValid(false);
    } else {
      setFullNameError('');
      setFormValid(username !== '' && password !== '' && fullname !== '' && age !== '' && gender !== '' && city !== '' && country !== '' && email !== '');
    }
  };
  
  const handleAge = (event) => {
    let tempAge = event.target.value;
    setAge(tempAge);
  
    if (tempAge === '') {
      setAgeError('Age is required');
      setFormValid(false);
    } else if (tempAge < 18 || tempAge >= 99) {
      setAgeError('Age should be between 18 and 99');
      setFormValid(false);
    } else {
      setAgeError('');
      setFormValid(username !== '' && password !== '' && fullname !== '' && age !== '' && gender !== '' && city !== '' && country !== '' && email !== '');
    }
  };
  const handleGender = (event) => {
    const value = event.target.value;
    
    setGender(value);
  };
  
  useEffect(() => {
    if (null) {
      return; // Exit early if gender is empty
    }
  
    console.log("Handle gender value:", gender);
  
    if (gender === 'select') {
      setGenderError('Gender is required');
      setFormValid(false);
    } else {
      setGenderError('');
      setFormValid(username !== '' && password !== '' && fullname !== '' && age !== '' && gender !== '' && city !== '' && country !== '' && email !== '');
    }
  }, [gender]);
  
  
  const handleCity = (event) => {
    setCity(event.target.value);
  
    if (event.target.value === '') {
      setCityError('City is required');
      setFormValid(false);
    } else {
      setCityError('');
      setFormValid(username !== '' && password !== '' && fullname !== '' && age !== '' && gender !== '' && city !== '' && country !== '' && email !== '');
    }
  };
  
  const handleCountry = (event) => {
    setCountry(event.target.value);
  
    if (event.target.value === '') {
      setCountryError('Country is required');
      setFormValid(false);
    } else {
      setCountryError('');
      setFormValid(username !== '' && password !== '' && fullname !== '' && age !== '' && gender !== '' && city !== '' && country !== '' && email !== '');
    }
  };
  
  const handleEmail = (event) => {
    setEmail(event.target.value);
    if (event.target.value === '') {
      setEmailError('Email is required');
      setFormValid(false);
    } else if (!/^\S+@\S+\.\S+$/.test(event.target.value)) {
      setEmailError('Email address is not valid');
      setFormValid(false);
    } else {
      setEmailError('');
      //setFormValid(true); // add this line to enable the submit button
      setFormValid(username !== '' && password !== '' && fullname !== '' && age !== '' && gender !== '' && city !== '' && country !== '' && email !== '');
    }
  };
 
// function validateForm() {
//     if (username.trim() !== '' && email.trim() !== '' && password.trim() !== '' && fullName.trim() !== ''&& age.trim() !== ''
//     && city.trim() !== '' && country.trim() !== '') {
//       setFormValid(true);
//     } else {
//       setFormValid(false);
//     }
   
//   }

  const handleClickButton1 = () => {
    const signup={username,password,fullname,age,gender,city,country,email}
    console.log(signup);
    console.log(`Username: ${username}, Password: ${password},Fullname: ${fullname},age: ${age},gender: ${gender},city: ${city},country: ${country},email: ${email}`);
    fetch("http://localhost:8080/signup",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(signup)
    })
    navigate("/");
  };

 
  //function handleSubmit(event) {
  //  event.preventDefault();
  //  console.log(`Username: ${username}, Password: ${password}, Full Name: ${fullName}, Age: ${age}, Gender: ${gender}, City: ${city}, Country: ${country}, Email: ${email}`);
  // }


  return (
    <form  className="form-container">
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={handleUsername}  />
        {usernameError && <span className="error">{usernameError}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePassword}   />
        {passwordError && <span className="error">{passwordError}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="fullname">Full Name:</label>
        <input type="text" id="fullname" value={fullname} onChange={handleFullName}   />
        {fullnameError && <span className="error">{fullnameError}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" value={age} onChange={handleAge}   />
        {ageError && <span className="error">{ageError}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="dropdown">Gender:</label>
        <select id="dropdown" value={gender} onChange={handleGender}>
          <option value="select">-- Select Gender --</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {genderError && <span className="error">{genderError}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="city">City:</label>
        <input type="text" id="city" value={city} onChange={handleCity}   />
        {cityError && <span className="error">{cityError}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="country">Country:</label>
        <input type="text" id="country" value={country} onChange={handleCountry}   />
        {countryError && <span className="error">{countryError}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" value={email} onChange={handleEmail}   />
         <span className="error">{emailError}</span>
      </div>
      <button onClick={handleClickButton1} type="submit  " disabled={!formValid} >Submit</button>
    </form>
  );
}

export default DemographicForm;
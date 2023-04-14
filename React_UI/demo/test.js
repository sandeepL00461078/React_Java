import React, { useState } from 'react';
import './DemographicForm.css';

function DemographicForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [cityError, setCityError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [emailError, setEmailError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // Perform validation
    let errors = false;

    if (!username) {
      setUsernameError('Username is required');
      errors = true;
    } else {
      setUsernameError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      errors = true;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      errors = true;
    } else {
      setPasswordError('');
    }

    if (!fullName) {
      setFullNameError('Full Name is required');
      errors = true;
    } else {
      setFullNameError('');
    }

    if (!age) {
      setAgeError('Age is required');
      errors = true;
    } else if (age < 18 || age > 99) {
      setAgeError('Age must be between 18 and 99');
      errors = true;
    } else {
      setAgeError('');
    }

    if (!city) {
      setCityError('City is required');
      errors = true;
    } else {
      setCityError('');
    }

    if (!country) {
      setCountryError('Country is required');
      errors = true;
    } else {
      setCountryError('');
    }

    if (!email) {
      setEmailError('Email is required');
      errors = true;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Email address is not valid');
      errors = true;
    } else {
      setEmailError('');
    }

    if (errors) {
      return;
    }

    console.log(`Username: ${username}, Password: ${password}, Full Name: ${fullName}, Age: ${age}, Gender: ${gender}, City: ${city}, Country: ${country}, Email: ${email}`);
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} required />
        {usernameError && <span className="error">{usernameError}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        {passwordError && <span className="error">{passwordError}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" value={fullName} onChange={(event) => setFullName(event.target.value)} required />
        {fullNameError && <span className="error">{fullNameError}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" value={age} onChange={(event) => setAge(event.target.value)} required />
        {ageError && <span className="error">{ageError}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender:</label>
        <select id="gender" value={gender} onChange={(event) => setGender(event.target.value)}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="city">City:</label>
        <input type="text" id="city" value={city} onChange={(event) => setCity(event.target.value)} required />
        {cityError && <span className="error">{cityError}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="country">Country:</label>
        <input type="text" id="country" value={country} onChange={(event) => setCountry(event.target.value)} required />
        {countryError && <span className="error">{countryError}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        {emailError && <span className="error">{emailError}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default DemographicForm;
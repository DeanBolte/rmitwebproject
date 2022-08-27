import React from 'react'
import { useState } from 'react';

const url_forum = "http://localhost:3000/forum";

const Signup = ({ onSwapForm, users }) => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User sign up states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Error checking states
  const [error, setError] = useState(false);

  // Handling sign up states
  const handleName = (e) => {
    setName(e.target.value);
  }
 
  const handleEmail = (e) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const email = e.target.value;
    if(email.match(emailRegex)) {
      setEmail(email);
      e.target.setCustomValidity("")
    } else {
      e.target.setCustomValidity("Not a valid email address")
    }
  }

  const handlePassword = (e) => {
    const passwordRegex = /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/;
    const password = e.target.value;
    if(password.match(passwordRegex)) {
      setPassword(password);
      e.target.setCustomValidity("")
    } else {
      e.target.setCustomValidity("Password must contain 1 uppercase, 1 lowercase, 1 number and 1 special character")
    }
  }

  const handleConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    if(confirmPassword.match(password)) {
      e.target.setCustomValidity("")
    } else {
      e.target.setCustomValidity("Passwords do not match")
    }
  }

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name === '' || email === '' || password === '') {
      setError(true);
    } else {
      // get date for join date
      let date = new Date();

      // all user details submitted
      users.push({"id":2,"name":name,"email":email,"password":password,"dateofjoining":date});
      setError(false);

      // sign in user
      localStorage.setItem("user", JSON.stringify(users[2]))
      window.location = url_forum;
    }
  }

  // Swap to sign in form
  const swapForm = () => {
    onSwapForm(1)
  }

  return (
    <div className='landing-position landing-form signup-margin'>
      <form onSubmit={handleSubmit}>
        <h1 className='form-header'>Sign Up Form</h1>
        <div className="input-container">
          <label className='input-label'>Name</label>
          <input className='input-text' placeholder= 'Please enter your full name' onChange={handleName} type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label className='input-label'>Email</label>
          <input className='input-text' placeholder= 'Please enter a valid email address' onChange={handleEmail} type="text" name="email" required />
          {renderErrorMessage("email")}
        </div>
        <div className="input-container">
          <label className='input-label'>Password</label>
          <input className='input-text' placeholder= 'Please enter a strong password' onChange={handlePassword} type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label className='input-label'>Confirm Password</label>
          <input className='input-text' placeholder= 'Please confirm your password' onChange={handleConfirmPassword} type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <input className='input-button' type="submit" name="submit" value="Create Account" />
        <div>
          <p className='button-large' onClick={() => swapForm()}>Already have an account? click here to sign in!</p>
        </div>
      </form>
    </div>
  )
}

export default Signup
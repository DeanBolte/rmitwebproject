import React from 'react'
import { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

const url_forum = "http://localhost:3000/forum"

const Signin = ({ onSwapForm, users }) => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

  // Handle form changes
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === '' || password === '') {
      // handle error
    } else {
      let user
      for(let u in users) {
        if (u.email === email) {
          user = u
        }
      }
      if (user) {
        if (user.password === password) {
          localStorage.setItem("user", JSON.stringify(user))
          window.location = url_forum;
        }
      } else {
        // handle error
      }
    } 
  }

  const swapForm = () => {
    onSwapForm(0)
  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <h1 className='logo'>Sign In Form</h1>
        <div className="input-container">
         <input placeholder= 'Email' onChange={handleEmail} type="text" name="uname" required />
         {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
         <input placeholder= 'Password' onChange={handlePassword} type="password" name="pass" required />
         {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <div>
          <p onClick={() => swapForm()}>Don't have an account? click here to sign up!</p>
        </div>
      </form>
    </div>
  )
}

export default Signin
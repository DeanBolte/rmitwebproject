import React from 'react'
import { useState } from 'react';

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
      for(let i = 0; i < users.length; i++) {
        console.log(users[i])
        if (users[i].email === email) {
          user = users[i]
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
    <div className='landing-position landing-form'>
      <form onSubmit={handleSubmit}>
        <h1 className='form-header'>Sign In Form</h1>
        <div className="input-container">
          <label className='input-label'>Email</label>
          <input className='input-text' placeholder= 'Email' onChange={handleEmail} type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label className='input-label'>Password</label>
          <input className='input-text' placeholder= 'Password' onChange={handlePassword} type="password" name="pass" required />
         {renderErrorMessage("pass")}
        </div>
        <input className="input-button" type="submit" />
        <div>
          <p className='button-large' onClick={() => swapForm()}>Don't have an account? click here to sign up!</p>
        </div>
      </form>
    </div>
  )
}

export default Signin
import React from 'react'
import { useState } from 'react';

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
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
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
      // all user details submitted
      users["2"] = `{ "username": ${name}, "email": ${email}, "password": ${password},}`
      setError(false);

      // swap to sign in form
      swapForm()
    }
  }

  // Swap to sign in form
  const swapForm = () => {
    onSwapForm(1)
  }

  return (
    <div className='landing-position'>
      <form onSubmit={handleSubmit}>
        <h1 className='logo'>Sign Up Form</h1>
        <div className="input-container">
         <input placeholder= 'Name' onChange={handleName} type="text" name="uname" required />
         {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
         <input placeholder= 'Email' onChange={handleEmail} type="text" name="email" required />
         {renderErrorMessage("email")}
        </div>
        <div className="input-container">
         <input placeholder= 'Password' onChange={handlePassword} type="password" name="pass" required />
         {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
         <input placeholder= 'Confirm Password' type="password" name="pass" required />
         {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <div>
          <p onClick={() => swapForm()}>Already have an account? click here to sign in!</p>
        </div>
      </form>
    </div>
  )
}

export default Signup
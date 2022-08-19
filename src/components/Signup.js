import React from 'react'
import { useState } from 'react';

const Signup = ({ onSwapForm }) => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

  const onSubmit = (e) => {
    e.preventDefault()

  }

  const swapForm = () => {
    onSwapForm(1)
  }

  return (
    <div className='form'>
      <form onSubmit={onSubmit}>
        <h1 className='logo'>Sign Up Form</h1>
        <div className="input-container">
         <input placeholder= 'Name' type="text" name="uname" required />
         {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
         <input placeholder= 'Email' type="text" name="uname" required />
         {renderErrorMessage("email")}
        </div>
        <div className="input-container">
         <input placeholder= 'Password' type="text" name="uname" required />
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
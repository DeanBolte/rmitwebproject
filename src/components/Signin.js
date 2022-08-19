import React from 'react'
import { useState } from 'react';

const Signin = ({ onSwapForm }) => {
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
    onSwapForm(0)
  }

  return (
    <div className='form'>
      <form onSubmit={onSubmit}>
        <h1 className='logo'>Sign In Form</h1>
        <div className="input-container">
         <input placeholder= 'Email' type="text" name="uname" required />
         {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
         <input placeholder= 'Password' type="password" name="pass" required />
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
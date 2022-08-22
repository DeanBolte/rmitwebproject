import React from 'react';
import { Link } from "react-router-dom";

import LandingForm from './LandingForm';

const Landing = () => {
  return (
    <div >
        <div className='split split-big left'>
          <div className='landing-position'>
            <h1 className='logo'>My LAN</h1>
            <p className='landing'>Welcome to the LAN</p>
          </div>
        </div>
        <div className='split split-small right'>
          <LandingForm />
        </div>
    </div>
  )
}

export default Landing
import React from 'react';
import { Link } from "react-router-dom";

import LandingForm from './LandingForm';

const Landing = () => {
  return (
    <div >
        <div className='split-big left landing-position'>
            <h1 className='landing logo'>My LAN</h1>
            <p className='landing'>Welcome to the LAN</p>
        </div>

        <div className='split-small right landing-position'>
            <LandingForm />
        </div>
    </div>
  )
}

export default Landing
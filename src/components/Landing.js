import React from 'react';

import LandingForm from './LandingForm';

const Landing = (props) => {
  return (
    <div >
        <div className='split split-big left'>
          <div className='landing-position'>
            <h1 className='landing-logo'>My LAN</h1>
            <p className='landing-description'>Welcome to the Loop Agile Now! 
            An intra-firm social media forum for Loop Agile employees to communicate with each other.</p>
          </div>
        </div>
        <div className='split split-small right'>
          <LandingForm users={props.users}/>
        </div>
    </div>
  )
}

export default Landing
import React from 'react'
import { Link } from 'react-router-dom'

const LandingOptions = () => {
  return (
    <div>
        <Link className='btn' to="/signin">Sign In</Link>
        <Link className='btn' to="/signup">Sign Up</Link>
    </div>
  )
}

export default LandingOptions
import React from 'react'
import Signin from './Signin'
import Signup from './Signup'

function SelectSignInOrSignUp(props) {
  if(props.sign_in_mode === 0) {
    return <Signup />
  } else {
    return <Signin />
  }
}

const LandingForm = () => {
  return (
    <div>
      <SelectSignInOrSignUp sign_in_mode={1} />
    </div>
  )
}

export default LandingForm
import React from 'react'
import { useState } from 'react';
import Signin from './Signin'
import Signup from './Signup'

const LandingForm = (props) => {
  const [sign_in_mode, setForm] = useState(1)

  const onSwapForm = (form_id) => {
    setForm(form_id)
  }

  const SelectSignInOrSignUp = (props) => {
    if(props.form === 0) {
      return <Signup onSwapForm={onSwapForm} users={props.users}/>
    } else {
      return <Signin onSwapForm={onSwapForm} users={props.users}/>
    }
  }

  return (
    <div>
      <SelectSignInOrSignUp form={sign_in_mode} users={props.users}/>
    </div>
  )
}

export default LandingForm
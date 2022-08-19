import React from 'react'
import { useState } from 'react';
import Signin from './Signin'
import Signup from './Signup'

const LandingForm = () => {
  const [sign_in_mode, setForm] = useState(1)

  const onSwapForm = (form_id) => {
    setForm(form_id)
  }

  const SelectSignInOrSignUp = (props) => {
    if(props.form === 0) {
      return <Signup onSwapForm={onSwapForm}/>
    } else {
      return <Signin onSwapForm={onSwapForm}/>
    }
  }

  return (
    <div>
      <SelectSignInOrSignUp form={sign_in_mode} />
    </div>
  )
}

export default LandingForm
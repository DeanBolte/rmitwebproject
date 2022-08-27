import React, { useState } from 'react'

const url_landing = "http://localhost:3000/landing";

const UserSettings = () => {
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("user")))

  const handleSignOut = () => {
    window.localStorage.removeItem("user");
    window.location = url_landing;
  }

  const handleName = (e) => {
    if(e.keyCode === 13) {  
      user.name = e.target.value;
      localStorage.setItem("user", JSON.stringify(user))
    }
  }

  const handleEmail = (e) => {
    if(e.keyCode === 13) {  
      user.email = e.target.value;
      localStorage.setItem("user", JSON.stringify(user))
    }
  }

  return (
    <div>
      <h1 className='settings-header'>User Settings</h1>

      <div className='settings-line'>
        <p className='settings-label'>Name</p>
        <input className='settings-inputtext' type='text' onKeyUp={handleName} defaultValue={user.name}/>
      </div>

      <div className='settings-line'>
        <p className='settings-label'>Email</p>
        <input className='settings-inputtext' type='text' onKeyUp={handleEmail} defaultValue={user.email}/>
      </div>

      <div className='settings-line'>
        <p className='settings-label'>Date Joined</p>
        <p className='settings-label'>{user.dateofjoining}</p>
      </div>
      
      <p className='button-large settings-dangerous' onClick={handleSignOut}>Sign Out</p>
      <p className='button-large settings-dangerous' onClick={handleSignOut}>Delete Account</p>
    </div>
  )
}

export default UserSettings

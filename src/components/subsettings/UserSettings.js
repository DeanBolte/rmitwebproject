import React, { useState } from 'react'

const url_landing = "http://localhost:3000/landing";

const UserSettings = () => {
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("user")))

  const handleSignOut = () => {
    window.localStorage.removeItem("user");
    window.location = url_landing;
  }

  return (
    <div>
      <h1 className='settings-header'>User Settings</h1>

      <div className='settings-line'>
        <p className='settings-label'>Name</p>
        <input className='settings-inputtext' type='text' value={user.name}/>
      </div>

      <div className='settings-line'>
        <p className='settings-label'>Email</p>
        <input className='settings-inputtext' type='text' value={user.email}/>
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

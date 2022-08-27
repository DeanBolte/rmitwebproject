import React from 'react'

const url_landing = "http://localhost:3000/landing";

const UserSettings = () => {
  const handleSignOut = () => {
    window.localStorage.removeItem("user");
    window.location = url_landing;
  }

  return (
    <div>
      <h1 className='settings-header'>User Settings</h1>
      <p className='button-large settings-dangerous' onClick={handleSignOut}>Sign Out</p>
    </div>
  )
}

export default UserSettings

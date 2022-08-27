import React, { useState } from 'react'

const url_landing = "http://localhost:3000/landing";

const UserSettings = (props) => {
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("user")))

  const handleSignOut = () => {
    window.localStorage.removeItem("user");
    window.location = url_landing;
  }
  
  const handleDeleteAccount = () => {
    
  }

  const handleName = (e) => {
    if(e.keyCode === 13) {  
      user.name = e.target.value;
      localStorage.setItem("user", JSON.stringify(user))
      
      console.log(user)
      props.setUsers({...props.users, [user.id]:user});
      console.log(props.users)
    }
  }

  const handleEmail = (e) => {
    if(e.keyCode === 13) {  
      user.email = e.target.value;
      localStorage.setItem("user", JSON.stringify(user))
      for(let key in props.users) {
        if(props.users[key].id === user.id) {
          props.users[key].email = user.email
        }
      }
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
      <p className='button-large settings-dangerous' onClick={handleDeleteAccount}>Delete Account</p>
    </div>
  )
}

export default UserSettings

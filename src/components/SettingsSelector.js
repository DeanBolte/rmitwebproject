import React from 'react'

const url_forum = "http://localhost:3000/forum"

const SettingsSelector = (props) => {
  const goToForum = () => {
    window.location = url_forum;
  }

  return (
    <div>
      <p className='settings-menu'>Menu</p>
      <p className='button-small' onClick={() => props.onMenuSwap("user")}>User Settings</p>
      <p className='button-small' onClick={() => props.onMenuSwap("app")}>App Settings</p>
      <p className='button-small' onClick={goToForum}>Return to Forum</p>
    </div>
  )
}

export default SettingsSelector

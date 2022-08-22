import React from 'react';
import { useState } from 'react';

const Settings = () => {
  const [subMenu, setSubMenu] = useState("user")

  const SelectedMenu = () => {
    switch(subMenu) {
      
      case "app":
        return (
          <div>
            <p>menu app</p>
          </div>
        )
      case "user":
      default:
        return (
          <div>
            <p>menu user</p>
          </div>
        )
      
    }
  }

  const onMenuSwap = (menuTag) => {
    setSubMenu(menuTag)
  }

  return (
    <div>
      <div className='split split-tiny left'>
        <p className='settings-menu'>Menu</p>
        <p className='settings-button' onClick={() => onMenuSwap("user")}>User Settings</p>
        <p className='settings-button' onClick={() => onMenuSwap("app")}>App Settings</p>
      </div>
      <div className='split split-huge right'>
        <h1 className='logo'>Settings</h1>
        <SelectedMenu />
      </div>
      
    </div>
  )
}

export default Settings
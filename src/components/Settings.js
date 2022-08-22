import React from 'react';
import { useState } from 'react';

import SubMenu from './SubMenu';

const Settings = () => {
  const [subMenu, setSubMenu] = useState("user")

  const onMenuSwap = (menuTag) => {
    setSubMenu(menuTag)
  }

  return (
    <div>
      <div className='split split-tiny left'>
        <p className='settings-menu'>Menu</p>
        <p className='button-small' onClick={() => onMenuSwap("user")}>User Settings</p>
        <p className='button-small' onClick={() => onMenuSwap("app")}>App Settings</p>
      </div>
      <div className='split split-huge right'>
        <SubMenu menuTag={subMenu}/>
      </div>
      
    </div>
  )
}

export default Settings
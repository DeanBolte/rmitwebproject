import React from "react";
import { useState } from "react";

const url_landing = "http://localhost:3000/landing"

const SubMenu = ({subMenu}) => {
  const handleSignOut = () => {
    window.localStorage.removeItem("user");
    window.location = url_landing;
  }

  switch(subMenu) {
    case "app":
      return (
        <div>
          <h1 className='logo'>App Settings</h1>
        </div>
      )
    case "user":
    default:
      return (
        <div>
          <h1 className='logo'>User Settings</h1>
        <p className='submenu-button settings-dangerous' onClick={handleSignOut}>Sign Out</p>
      </div>
    )
  }
}

export default SubMenu
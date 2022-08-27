import React from "react";

import AppSettings from "./subsettings/AppSettings";
import UserSettings from "./subsettings/UserSettings";

const SubMenu = (props) => {
  

  switch(props.menuTag) {
    case "app":
      return (<AppSettings />);
    case "user":
    default:
      return (<UserSettings />);
  }
}

export default SubMenu
import React from "react";
import { useHistory } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

 const AvatarMenu = () => {
  let history = useHistory();

  const avatar = localStorage.getItem("avatar");
  const name = localStorage.getItem("fname");

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {popupState => (
        <>
          {localStorage.getItem("avatar") && (
            <Avatar
              src={avatar}
              {...bindTrigger(popupState)}
              className="logged-in avatar"
            />
          )}
          {!localStorage.getItem("avatar") && (
            <Avatar {...bindTrigger(popupState)} className="logged-in avatar">
              {name[0]}
            </Avatar>
          )}
          <Menu {...bindMenu(popupState)}>
            <MenuItem
              onClick={logout}
              style={{fontSize: '1.4rem'}}
            >
              Sign Out
            </MenuItem>
            <MenuItem
              style={{fontSize: '1.4rem'}}
            >
              Edit Profile
            </MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  );
}

export default AvatarMenu;

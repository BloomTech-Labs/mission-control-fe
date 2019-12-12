import React from "react"; //, { useState }
import { useHistory, Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const AvatarMenu = (props) => {
  let history = useHistory();

  const avatar = localStorage.getItem("avatar");
  const userToken = JSON.parse(localStorage.getItem("okta-token-storage"));
  const name = userToken.idToken.claims.name;


  const logout = () => {
    localStorage.clear();
    history.push("/");
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
              {name ? name[0] : "U"}
            </Avatar>
          )}
          <Menu {...bindMenu(popupState)}>
            {localStorage.getItem("role") === "admin" ? (
              <Link
                style={{ textDecoration: "none" }}
                to={`/admin/${localStorage.getItem("fname")}/edit/promotions`}
                className="nav-head"
              >
                <MenuItem
                  style={{ fontSize: "1.4rem", color: "black" }}
                  //onClick={handleOpen}
                >
                  Promote Users
                </MenuItem>
              </Link>
            ) : null}
            <MenuItem onClick={logout} style={{ fontSize: "1.4rem" }}>
              Sign Out
            </MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  );
};

export default AvatarMenu;

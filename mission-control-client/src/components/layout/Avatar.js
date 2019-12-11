import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import decrypt from "../../utils/decrypt";
import { connect } from "react-redux";
import { resetProjects } from "../../actions/index";

const AvatarMenu = ({ resetProjects }) => {
  let history = useHistory();

  const avatar = localStorage.getItem("avatar");
  const name = localStorage.getItem("fname");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("fname");
    // localStorage.removeItem("role");
    resetProjects([]);
    history.push("/");
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            {/* <Link to={`/profile/${localStorage.getItem('fname')}/edit/email`} className="nav-head">
              <MenuItem style={{ fontSize: "1.4rem" }} onClick = {handleOpen}>Edit Profile</MenuItem>
            </Link> */}
            {localStorage.getItem("role") === "admin" ? (
              <Link
                style={{ textDecoration: "none" }}
                to={`/admin/${localStorage.getItem("fname")}/edit/promotions`}
                className="nav-head"
              >
                <MenuItem
                  style={{ fontSize: "1.4rem", color: "black" }}
                  onClick={handleOpen}
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

export default connect(null, { resetProjects })(AvatarMenu);

import React from "react"; //, { useState }
import { useHistory, Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { connect } from "react-redux";
import { resetProjects } from "../../actions/index";

const AvatarMenu = ({ resetProjects }) => {
  let history = useHistory();

  const avatar = localStorage.getItem("avatar");
  const name = localStorage.getItem("fname");

  const logout = () => {
    resetProjects([]);
    history.push("/");
  };

  // const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

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

export default connect(null, { resetProjects })(AvatarMenu);

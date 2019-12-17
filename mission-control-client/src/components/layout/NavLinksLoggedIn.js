import React from "react";
import AvatarMenu from "./Avatar";
import {useHistory} from 'react-router-dom'
const NavLinksLoggedIn = () => {
  const [userToken] = React.useState(JSON.parse(localStorage.getItem("okta-token-storage")));
  const [user, setUser] = React.useState();
  const history = useHistory()
  
  React.useEffect( () => {
    if(!userToken.idToken){
      history.push("/")
      localStorage.clear()
    } else {
      setUser(userToken.idToken.claims)
    }
  }, [userToken])

  if(!user) return <h1>Loading...</h1>
  return (
    <>
      <p
        data-testid="greeting"
        className="logged-in logged-in-link"
      >{`Welcome back, ${user.name ? user.name : "User"}`}</p>
      <AvatarMenu name={user.name}/>
    </>
  );
};

export default NavLinksLoggedIn;

import React, { useEffect, useState } from "react";
import {
  Switch,
  Route,
  useLocation,
  Redirect
} from "react-router-dom";
import { Security, ImplicitCallback } from "@okta/okta-react";
// components
import Layout from "./components/layout/Layout";
// Context
import {ProductContext} from './context/ProductContext'
import ProductContextProvider from './context/ProductContextProvider';
// AXIOS
import axiosLabsGraphQL from "./utils/axiosLabsGraphQL";
import axios from "axios";
// GRAPHQL
import { fullProjectDetailsById, peopleByProjectId } from "./queries";

// import Registration from "./components/auth/Registration.js";
import Login from "./components/auth/Login";
import ProjectMore from "./components/dashboard/admin-dashboard/ProjectMore";
import Bad from "./components/layout/Bad";
import AdminDash from "./components/dashboard/admin-dashboard/DashboardHome";
import UserDash from "./components/dashboard/user-dashboard/DashboardHome";

//utils
// import AdminPrivateRoute from "./utils/AdminPrivateRoute";
// import PrivateRoute from "./utils/PrivateRoute";
// import StudentPrivateRoute from "./utils/StudentPrivateRoute";
import embedAnalytics from "./utils/embedAnalytics";

//styles
import "./styles/index.scss";

function App() {
  
    // State for context
    // const [productState, setProductState] = React.useState(
    //   {
    //     isLoading: false,
    //     err: null,
    //     active: null,
    //     project: null
    //   }
    // )
  
    // // Product Context fn's
    // const setActiveProduct = el => {
    //   setProductState({...productState, active: el})
    // }
  
    // const setSelectedProject = id => {
    //   axios
    //       .all([
    //         axiosLabsGraphQL.post("", { query: fullProjectDetailsById(id) }),
    //         axiosLabsGraphQL.post("", { query: peopleByProjectId(id) })
    //       ])
    //       .then(
    //         axios.spread((res, res2) => {
    //           const project = {
    //             project: res.data.data.projects,
    //             people: res2.data.data.projectRoles
    //           }
    //           // dispatch({ type: SET_ACTIVE_PROJECT_SUCCESS, payload: project });
    //           setProductState({...productState, project: project})
    //         })
    //       )
    //       .catch(err => {
    //         // dispatch({ type: SET_ACTIVE_PROJECT_FAILURE, payload: err.response });
    //         console.log(err)
    //       });
    // }


  const location = useLocation();

  useEffect(() => {
    embedAnalytics();
  }, [location]);

  function onAuthRequired({ history }) {
    history.push("/");
  }

  return (
    // <ProductContext.Provider value={{productState, setActiveProduct, setSelectedProject}}>
      <Layout>
        <Security
          issuer={`${process.env.REACT_APP_OKTA_SERVER}`}
          clientId={`${process.env.REACT_APP_OKTA_CLIENT}`}
          redirectUri={window.location.origin + "/implicit/callback"}
          onAuthRequired={onAuthRequired}
          pkce={true}
        >
          <Switch>
            {/* {(!localStorage.getItem("role") ||
              !["admin", "manager", "student"].includes(decrypt())) &&
              localStorage.removeItem("token") &&
              history.push("/login")} */}
            {/* <PrivateRoute path="/" exact>
              {localStorage.getItem("token") ? (
                <Redirect to={{ pathname: `${decrypt()}/dashboard` }} />
              ) : (
                <Redirect to="/login" />
              )}
            </PrivateRoute> */}
            {/* OKTA will be taking over user access and control */}
            <Route
              path="/login"
              render={() => <Login baseUrl={`${process.env.REACT_APP_OKTA_URL}`} />}
            />
            <Route exact={true} path="/">
              {localStorage.getItem("okta-token-storage") ? 
              <Redirect push to="/admin/dashboard" />
            :  (
              <Redirect push to="/login" />
            )}
            </Route>
            <Route path="/student/dashboard" component={UserDash} />
            <Route exact path="/manager/dashboard" component={AdminDash} />
            <Route exact path="/admin/dashboard" component={AdminDash} />
            <ProductContextProvider>
              <Route path="/admin/dashboard/:id" component={ProjectMore} />
            </ProductContextProvider>
            {/* OKTA Signin Widget route */}
            <Route path="/implicit/callback" component={ImplicitCallback} />
            <Route component={Bad} />
          </Switch>
        </Security>
      </Layout>
    // </ProductContext.Provider>
  );
}

export default App;

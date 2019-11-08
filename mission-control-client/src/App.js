import React, { useEffect } from "react";
import {
  Switch,
  Route,
  useLocation,
  Redirect,
  useHistory
} from "react-router-dom";

// components
import Layout from "./components/layout/Layout";
import Registration from "./components/auth/Registration.js";
import Login from "./components/auth/Login";
import ProjectMore from "./components/dashboard/admin-dashboard/ProjectMore";
import Bad from "./components/layout/Bad";
import AdminDash from "./components/dashboard/admin-dashboard/DashboardHome";
import UserDash from "./components/dashboard/user-dashboard/DashboardHome";
import EditProfile from "./components/user-settings/EditProfile";
import UserPromotions from './components/user-settings/UserPromotions'

//utils
import AdminPrivateRoute from "./utils/AdminPrivateRoute";
import PrivateRoute from "./utils/PrivateRoute";
import StudentPrivateRoute from "./utils/StudentPrivateRoute";
import embedAnalytics from "./utils/embedAnalytics";
import decrypt from "./utils/decrypt";

//styles
import "./styles/index.scss";

function App() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    embedAnalytics();
  }, [location]);

  return (
    <Layout>
      <Switch>
        {(!localStorage.getItem("role") ||
          !["admin", "manager", "student"].includes(decrypt())) &&
          localStorage.removeItem("token") &&
          history.push("/login")}
        <PrivateRoute path="/" exact>
          {localStorage.getItem("token") ? (
            <Redirect to={{ pathname: `${decrypt()}/dashboard` }} />
          ) : (
            <Redirect to="/login" />
          )}
        </PrivateRoute>
        <Route path="/register" component={Registration} />
        <Route path="/login" component={Login} />
        <PrivateRoute path={`/profile/${localStorage.getItem('fname')}/edit/password`} component={EditProfile} />
        <PrivateRoute path={`/profile/${localStorage.getItem('fname')}/edit/email`} component={EditProfile} />
        <StudentPrivateRoute path="/student/dashboard" component={UserDash} />
        <AdminPrivateRoute exact path="/manager/dashboard" component={AdminDash} />
        <AdminPrivateRoute exact path="/admin/dashboard" component={AdminDash} />
        <AdminPrivateRoute path={`/admin/${localStorage.getItem('fname')}/edit/promotions`} component={UserPromotions} />
        <AdminPrivateRoute path="/admin/dashboard/:id" component={ProjectMore} />
        <Route component={Bad} />
      </Switch>
    </Layout>
  );
}

export default App;

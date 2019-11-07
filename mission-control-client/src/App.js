import React, { useEffect } from "react";
import {
  Switch,
  Route,
  useLocation,
  Redirect,
  useHistory
} from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import StudentPrivateRoute from "./utils/StudentPrivateRoute";
import AdminPrivateRoute from "./utils/AdminPrivateRoute";
import Layout from "./components/layout/Layout";
import "./styles/index.scss";
import Registration from "./components/auth/Registration.js";
import Login from "./components/auth/Login";
import Bad from "./components/layout/Bad";
import AdminDash from "./components/dashboard/admin-dashboard/DashboardHome";
import UserDash from "./components/dashboard/user-dashboard/DashboardHome";
import embedAnalytics from "./utils/embedAnalytics";
<<<<<<< HEAD
import EditProfile from "./components/user_settings/EditProfile";
=======
import decrypt from "./utils/decrypt";
>>>>>>> 9c42741aaa7795f441602874d52596a0631c36e6

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
<<<<<<< HEAD
        <PrivateRoute path={`/dashboard/${localStorage.getItem('user')}`} component={DashboardHome} />
        <PrivateRoute path={`/profile/${localStorage.getItem('user')}/edit`} component={EditProfile} />
        <PrivateRoute path={`/profile/${localStorage.getItem('user')}/edit/password`} component={EditProfile} />
        <PrivateRoute path={`/profile/${localStorage.getItem('user')}/edit/email`} component={EditProfile} />
        <PrivateRoute path={`/profile/${localStorage.getItem('user')}/edit/promotions`} component={EditProfile} />
=======
        <StudentPrivateRoute path="/student/dashboard" component={UserDash} />
        <AdminPrivateRoute path="/manager/dashboard" component={AdminDash} />
        <AdminPrivateRoute path="/admin/dashboard" component={AdminDash} />
>>>>>>> 9c42741aaa7795f441602874d52596a0631c36e6
        <Route component={Bad} />
      </Switch>
    </Layout>
  );
}

export default App;

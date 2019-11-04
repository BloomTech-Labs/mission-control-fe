import React from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import { useHistory, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import computers from "../../assets/computers.svg";
import encrypt from '../../utils/encrypt';

const URL =
  "https://dw0z95u459ou2.cloudfront.net/api/auth/login";

function FormShape({ errors, touched, status }) {
  const history = useHistory();
  return (
    <div style={{ position: "relative" }}>
      <div className="auth-container">
        <h1 data-testid="signin-head" className="auth-header">
          Sign in
        </h1>
        <p className="dontHave">
          Don't have an account? <Link to="/register">Create One</Link>
        </p>
        <Form data-testid="login-form" history={history} className="login-form">
          <div className="email">
            <label htmlFor="email">Email</label>
            <Field
              data-testid="email-field"
              placeholder="Enter Your Email. . ."
              type="text"
              name="email"
            />
            {(touched.email && errors.email && (
              <p className="error">{errors.email}</p>
            )) || (status && <p className="error">{status}</p>)}
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <Field
              data-testid="password-field"
              placeholder="Password"
              type="password"
              name="password"
            />
            {(touched.password && errors.password && (
              <p className="error">{errors.password}</p>
            )) || (status && <p className="error">{status}</p>)}
          </div>
          <div className="remember">
            <Field
              component="input"
              type="checkbox"
              name="remembered"
              className="checkbox"
            />
            <p>Remember me</p>
          </div>
          <Button
            data-testid="submit"
            className="btn"
            color="primary"
            type="submit"
          >
            LOG IN
          </Button>
        </Form>
    </div>
      <img
        src={computers}
        alt="group of people working on their laptops"
        className="auth-img"
      />
    </div>
  );  
}
export default withFormik({
  mapPropsToValues({ email, password, remembered }) {
    return {
      email: email || "",
      password: password || "",
      remembered: remembered || false
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Valid password is required.")
  }),
  handleSubmit(
    values,
    {
      setStatus,
      props: { history }
    }
  ) {
    const packet = {
      email: values.email,
      password: values.password,
      remembered: values.remembered
    };
    axios
      .post(URL, packet)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", encrypt(res.data.user.role, process.env.REACT_APP_ROLE_KEY));
        localStorage.setItem("fname", res.data.user.firstName);
        history.push(`/${res.data.user.role}/dashboard`);
      })
      .catch(err => setStatus(err.response.data.message));
  }
})(FormShape);

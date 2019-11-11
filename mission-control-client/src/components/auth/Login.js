import React from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import { useHistory, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import computers from "../../assets/computers.svg";
import encrypt from '../../utils/encrypt';
import { connect } from 'react-redux'
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';

const URL =
  "https://dw0z95u459ou2.cloudfront.net/api/auth/login";

function FormShape({ errors, touched, status, isSubmitting }) {

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
            {isSubmitting ?
              <ClipLoader
                    sizeUnit={"px"}
                    size={30}
                    color={'#E5E5E5'}
                 />
            : 'LOG IN'}
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
const FormikLogin = withFormik({
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
      setSubmitting,
      props: { history }
    }
  ) {
    const packet = {
      email: values.email,
      password: values.password,
      remembered: values.remembered
    };
    setSubmitting(true)
    axios
      .post(URL, packet)
      .then(res => {        
        setSubmitting(false)
        localStorage.setItem("email", res.data.user.email);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", encrypt(res.data.user.role, process.env.REACT_APP_ROLE_KEY || process.env.ROLE_KEY));
        localStorage.setItem("fname", res.data.user.firstName);
        history.push(`/${res.data.user.role}/dashboard`);
      })
      .catch(err => {
        setSubmitting(false)
        setStatus(err.response.data.message)
      });
  }
})(FormShape);

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, {})(FormikLogin)
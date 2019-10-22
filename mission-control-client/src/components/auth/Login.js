import React, { useState } from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core";
import { Form, withFormik } from "formik";
import { useHistory, Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import computers from "../../assets/computers.svg";
const URL =
  "http://mission-control-be-dev.us-east-1.elasticbeanstalk.com/api/auth/admin/login";
const styles = () => ({
  container: {
    position: "absolute",
    width: "90vw",
    minHeight: "95vh",
    maxHeight:"95vh",
    margin:"0 auto",
    marginTop:"4%",
    background: "#FFFFFF",
    borderRadius: "5px"
  },
  form: {
    position: "absolute",
    top: "30%",
    left: '15%',
    width: '40%',
    minHeight: '80vh'
  },
  header: {
    position: "absolute",
    width: "30%",
    height: "4.3rem",
    left: "0%",
    top: "10%",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "3.6rem",
    lineHeight: "4.3rem",
    textAlign: "center",
    letterSpacing: "0.06em",
    color: "#0051BE"
  },
  emailTextField: {
    // position: "absolute",
    width: "576px",
    height: "77px",
    // left: "217.5px",
    // top: "518.5px",
    background: "#F4F5F9"
  },
  passwordTextField: {
    // position: "absolute",
    width: "576px",
    height: "77px",
    // left: "217.5px",
    // top: "687.5px",
    background: "#F4F5F9"
  },
  dontHave: {
    // position: "absolute",
    width: "310px",
    height: "22px",
    // left: "218.5px",
    // top: "404.5px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "1.8rem",
    lineHeight: "22px",
    letterSpacing: "0.06em",
    color: "#313131"
  },
  button: {
    // position: "absolute",
    width: "152px",
    height: "48px",
    // left: "217.5px",
    // top: "887.5px",
    background: "#0051BE",
    borderRadius: "5px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "1.8rem",
    lineHeight: "22px",
    color: "#FFFFFF"
  },
  emailLabel: {
    // position: "absolute",
    width: "63px",
    height: "29px",
    // left: "218.5px",
    // top: "474.5px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "2.4rem",
    lineHeight: "29px",
    textAlign: "center",
    letterSpacing: "0.06em",
    color: "#313131"
  },
  passwordLabel: {
    // position: "absolute",
    width: "112px",
    height: "29px",
    // left: "217.5px",
    // top: "643.5px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "2.4rem",
    lineHeight: "29px",
    textAlign: "center",
    letterSpacing: "0.06em",
    color: "#313131"
  }
});
function FormShape({ classes, errors, touched, values, handleSubmit, handleChange }) {
  const history = useHistory();
  return (
    <div style = {{position:'relative'}}>
      <div className={classes.container} style={{ zIndex: "-1" }}>
        <h1 className={classes.header}>Sign in</h1>
        <p className={classes.dontHave}>
          Don't have an account? <Link to="/register">Create One</Link>
        </p>
        <Form history={history} className = {classes.form}>
          <Card>
            <label className={classes.emailLabel}>Email</label>
            <TextField
              className={classes.emailTextField}
              label="Enter Your Email. . ."
              type="email"
              value={values.email}
              name="email"
              helperText={touched.email ? errors.email : ""}
              onChange={handleChange}
            />
            <label className={classes.passwordLabel}>Password</label>
            <TextField
              className={classes.passwordTextField}
              label="Enter Your Password. . ."
              type="password"
              value={values.password}
              name="password"
              helperText={touched.password ? errors.password : ""}
              onChange={handleChange}
            />
            <Button className={classes.button} color="primary" type="submit">
              LOG IN
            </Button>
          </Card>
        </Form>
      </div>
      <img
        src={computers}
        alt="group of people working on their laptops"
        style={{
          zIndex: "1",
          position: "absolute",
          top: "0",
          right: "0",
          marginTop:"4%",
          minHeight: "95vh",
          maxHeight:"95vh",
          width:'auto'
        }}
      />
    </div>
  );
}
const LoginForm = withStyles(styles)(FormShape);
export default withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().required("Please, enter a valid email"),
    password: Yup.string().required("Please, enter password.")
  }),
  handleSubmit(
    values,
    {
      props: { history }
    }
  ) {
    const packet = {
      email: values.email,
      password: values.password
    };
    axios.post(URL, packet).then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", res.data.user.userId);
      localStorage.setItem("fname", res.data.user.firstName);
      history.push(`/dashboard/${localStorage.getItem("user")}`);
      // curious about the difference of security between these two
      // history.push(`/dashboard/${res.data.user.userId}`)
    });
  }
})(LoginForm);
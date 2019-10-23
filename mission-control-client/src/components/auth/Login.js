import React from "react";
import axios from "axios";
import { Form, withFormik } from "formik";
import { useHistory, Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import computers from "../../assets/computers.svg";

const URL =
  "http://mission-control-be-dev.us-east-1.elasticbeanstalk.com/api/auth/admin/login";

function FormShape({
  classes,
  errors,
  touched,
  values,
  handleSubmit,
  handleChange
}) {
  const history = useHistory();
  return (
    <div style={{ position: "relative" }}>
      <div className="auth-container" style={{ zIndex: "-1" }}>
        <h1 className="auth-header">Sign in</h1>
        <p className="dontHave">
          Don't have an account? <Link to="/register">Create One</Link>
        </p>
        <Form history={history} data-testid="login-form" className="login-form">
          <label
            className="emailLabel"
            htmlFor="email"
          >
            Email
          </label>
          <TextField
            className="emailTextField"
            label="Enter Your Email. . ."
            type="email"
            value={values.email}
            name="email"
            helperText={touched.email ? errors.email : ""}
            onChange={handleChange}
            inputProps={{ "data-testid": "email-field" }}
          />
          <label className="passwordLabel" htmlFor="password">
            Password
          </label>
          <TextField
            className="passwordTextField"
            label="Enter Your Password. . ."
            type="password"
            value={values.password}
            name="password"
            helperText={touched.password ? errors.password : ""}
            onChange={handleChange}
            inputProps={{ "data-testid": "password-field" }}
          />
          <Button data-testid="submit" className="btn" color="primary" type="submit">
            LOG IN
          </Button>
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
          marginTop: "4%",
          minHeight: "95vh",
          maxHeight: "95vh",
          width: "auto"
        }}
      />
    </div>
  );
}
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
})(FormShape);

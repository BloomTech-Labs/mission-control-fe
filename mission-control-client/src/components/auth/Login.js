import React from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import { useHistory, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import computers from "../../assets/computers.svg";

const URL =
  "http://mission-control-be-dev.us-east-1.elasticbeanstalk.com/api/auth/admin/login";


function FormShape({errors, touched }) {
  const history = useHistory();
  console.log(errors)
  return (
    <div style = {{position:'relative'}}>
      <div className='auth-container' >
        <h1 className='auth-header'>Sign in</h1>
        <p className='dontHave'>
          Don't have an account? <Link to="/register">Create One</Link>
        </p>
        <Form history={history} className = 'login-form' >
          <div className = 'email'>
            <label htmlFor = 'email'>Email</label>
            <Field placeholder ="Enter Your Email. . ." type ="text" name ="email"/>
            {touched.email && errors.email && (
              <p className="error">{errors.email}</p>
            )}
          </div>
          <div className = 'password'>
            <label htmlFor = 'password'>Password</label>
            <Field placeholder = 'Password' type="password" name="password"/>
            {touched.password && errors.password && (
              <p className="error">{errors.password}</p>
            )}
          </div>
          <div className = 'remember'>
            <Field component="input" type="checkbox" name = 'remembered' className = 'checkbox'/>
            <p>Remember me</p>
          </div>
            <Button className ='btn' color="primary" type="submit">
              LOG IN
            </Button>
        </Form>
    </div>
      <img
        src={computers}
        alt="group of people working on their laptops"
        className = 'auth-img'
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
      props: { history }
    }
  ) {
    const packet = {
      email: values.email,
      password: values.password,
      remembered: values.remembered
    };
    console.log(values)
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

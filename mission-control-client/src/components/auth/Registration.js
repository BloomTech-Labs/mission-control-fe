import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";
import validator from "validator";
import { makeInputs } from "./utils";

export default function() {
  let history = useHistory();
  let error = false;
  const defaultState = {
    firstName: {
      type: "text",
      value: "",
      error,
      message: "Please, enter first name."
    },
    lastName: {
      type: "text",
      value: "",
      error,
      message: "Please, enter first name"
    },
    email: {
      type: "email",
      value: "",
      error,
      message: "Please, enter valid email"
    },
    password: {
      type: "password",
      value: "",
      error,
      message: "Please, enter password between 8-16 characters"
    },
    confirmPassword: {
      type: "password",
      value: "",
      error,
      message: "Passwords do not match"
    }
  };

  const [state, setState] = useState(defaultState);

  const Inputs = () =>
    Object.keys(state).map(property => makeInputs(property, state, setState));

  function handleSubmit(e) {
    e.preventDefault();
    const firstName = state.firstName.value;
    const lastName = state.lastName.value;
    const email = state.email.value;
    const password = state.password.value;
    const confirmPassword = state.confirmPassword.value;

    if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      validator.isEmail(email) &&
      password.length >= 8 &&
      password.length <= 16 &&
      confirmPassword === password
    ) {
      //TODO: encrypt password
      const packet = {
        firstName,
        lastName,
        email,
        password,
        roleId: "123abc"
      };

      const URL =
        "http://mission-control-be-dev.us-east-1.elasticbeanstalk.com/api/auth/admin/register";
      // handle input
      axios
        .post(URL, packet)
        .then(res => {
          setState(defaultState);
          localStorage.setItem("token", res.data.token);
          history.push('/dashboard');
        })
        .catch(err => console.log(err));
    }

    // if length of first name is incorrect
    error = true;
    if (firstName.length <= 0) {
      setState({
        ...state,
        firstName: {
          ...state.firstName,
          error
        }
      });
      return;
    }

    // if length of last name is incorrect
    if (lastName.length <= 0) {
      setState({
        ...state,
        lastName: {
          ...state.lastName,
          error
        }
      });
      return;
    }

    // if not a valid email
    if (!validator.isEmail(email)) {
      setState({
        ...state,
        email: {
          ...state.email,
          error
        }
      });
      return;
    }

    // if length of password is incorrect
    if (password.length < 8 || password.length > 16) {
      setState({
        ...state,
        password: {
          ...state.password,
          error
        }
      });
      return;
    }
    // if confirmed password does not match password
    if (confirmPassword !== password) {
      setState({
        ...state,
        confirmPassword: {
          ...state.confirmPassword,
          error
        }
      });
      return;
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      {Inputs()}
      <Button type="submit" color="blue">
        Submit
      </Button>
    </Form>
  );
}

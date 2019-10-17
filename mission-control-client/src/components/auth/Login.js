import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useHistory } from "react-router";
import axios from "axios";
import validator from "validator";
import { makeInputs } from "./utils";

export default function() {
  let history = useHistory();
  let error = false;
  const defaultState = {
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
    }
  };

  const [state, setState] = useState(defaultState);

  const Inputs = () =>
    Object.keys(state).map(property => makeInputs(property, state, setState));

  function handleSubmit(e) {
    e.preventDefault();
    const email = state.email.value;
    const password = state.password.value;

    if (
      validator.isEmail(email) &&
      password.length >= 8 &&
      password.length <= 16
    ) {
      //TODO: encrypt password
      const packet = {
        email,
        password,
      };

      const URL =
        "http://mission-control-be-dev.us-east-1.elasticbeanstalk.com/api/auth/admin/login";
      // handle input
      axios
        .post(URL, packet)
        .then(res => {
          console.log(res);
          setState(defaultState);
          localStorage.setItem("token", res.data.token);
          history.push("/dashboard");
        })
        .catch(err => console.log(err));
    }

    // if length of first name is incorrect
    error = true;

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

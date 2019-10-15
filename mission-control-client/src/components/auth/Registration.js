import React, {useState} from "react";
import {Button, Form, Message} from "semantic-ui-react";
import axios from "axios";
import validator from "validator";
import {checkType} from "../../utils";

export default function () {
    
    const defaultState = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmedPassword: ""
    };

    const [state, setState] = useState(defaultState);
    const [error, handleError] = useState({type: "", message: ""});
    
    const {
            firstName, 
            lastName, 
            email, 
            password,
            confirmedPassword
        } = state;

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
        console.log("Here is state onChange: ", state)
    }
    
    function handleSubmit(e) {
        e.preventDefault();

        const correctType = checkType(state, "string");
        // if type and lengths are correct
        if (
           correctType
           && firstName.length > 0
           && lastName.length > 0
           && validator.isEmail(email)
           && password.length >= 8
           && password.length <= 16
           && confirmedPassword === password
        ) {
            console.log("Here is everything being submitted: ", state);

            // no errors exist
            handleError({
                ...error,
                type: "",
                message: ""
            });
            // handle input
            delete state.confirmedPassword;
            axios.post("get url from Armando", state)
                .then(res => {
                    console.log(res);
                    setState(defaultState);
                }).catch(err => console.log(err));
        }
        
        // if lengths of first or last name are incorrect
        if (firstName.length <= 0 || lastName.length <= 0) {
            const type = "NAME";
            const message = "Please, submit both first name and last name.";
            handleError({
                ...error, 
                type,
                message 
            });
            return;
        }

        // if not a valid email
        if (!validator.isEmail(email)) {
            const type = "EMAIL";
            const message = "Please, submit a valid email."
            handleError({
                ...error, 
                type,
                message 
            });
            return;
        }

        // if length of password is incorrect
        if (password.length < 8 || password.length > 16) {
            const type = "PASSWORD";
            const message = "Password must be between 8 and 16 characters";
            handleError({
                ...error, 
                type,
                message 
            });
            return;
        }
        // if confirmed password does not match password
        if (confirmedPassword !== password) {
            const type = "CONFIRMED_PASSWORD";
            const message = "Confirmation does not match password.";
            handleError({
                ...error, 
                type,
                message 
            });
            return;
        }

        // if data type of any property isn't a string 
        if (
           !correctType
        ) {
            // handle error
            alert("Invalid input. Please, fill in all forms.");
            return;
        }
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Input 
                name="firstName" 
                value={firstName} 
                label="First Name" 
                type="text" 
                onChange={handleChange}
            />
            
            <Form.Input 
                name="lastName" 
                value={lastName} 
                label="Last Name" 
                type="text" 
                onChange={handleChange}
            />
            {
                error.type === "NAME"  ? (
                    <Message negative>
                        <Message.Header>
                            {error.message}
                        </Message.Header>
                    </Message>
                    ) : null
            }
            <Form.Input 
                name="email" 
                value={email} 
                label="Email" 
                type="text" 
                onChange={handleChange}
            />
            {
                error.type === "EMAIL"  ? (
                    <Message negative>
                        <Message.Header>
                            {error.message}
                        </Message.Header>
                    </Message>
                    ) : null
            }
            <Form.Input 
                name="password" 
                value={password} 
                label="Password" 
                type="password"
                onChange={handleChange}
            />
            {
                error.type === "PASSWORD"  ? (
                    <Message negative>
                        <Message.Header>
                            {error.message}
                        </Message.Header>
                    </Message>
                    ) : null
            }
            <Form.Input 
                name="confirmedPassword"
                value={confirmedPassword}
                label="Confirm password"
                type="password"
                onChange={handleChange}
            />
            {
                error.type === "CONFIRMED_PASSWORD" ? (
                    <Message negative>
                        <Message.Header>
                            {error.message}
                        </Message.Header>
                    </Message>
                ) : null
            }    
            <Button 
                type="submit"
                color="blue"
                disabled={
                    !firstName
                    || !lastName
                    || !email
                    || !password
                    || !confirmedPassword
                }
            >
                Submit
            </Button>
        </Form>      
    );
}

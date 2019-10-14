import React, {useState} from "react";
import {Button, Form} from "sematic-ui-react";
import axios from "axios";
import validator from "validator";
import {checkType} from "../utils";

export default function () {
    
    const defaultState = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    };

    const [state, setState] = useState(defaultState);

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        
        const {firstName, lastName, email, password} = state;

        const correctType = checkType(state, "string");
        // if type and lengths are correct
        if (
           correctType
           && firstName.length > 0
           && lastName.length > 0
           && validator.isEmail(email)
           && password.length >= 8
           && password.length <= 16
        ) {
            // handle input
            axios.post("get url from Armando", state)
                then(res => {
                    console.log(res);
                    setState(defaultState)
                }).catch(err => console.log(err));
        }
        
        // if lengths of first or last name are incorrect
        if (firstName.length <= 0 || lastName.length <= 0) {
            alert("Please, submit both first name and last name.");
            return;
        }
        // if not a valid email
        if (!validator.isEmail(email)) {
            alert("Please, submit a valid email.");
            return;
        }
        // if length of password is incorrect
        if (password.length < 8 || password.length > 16) {
            alert("Password must be between 8 and 16 characters");
            return;
        }
        // if type is incorrect
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
                value={state.firstName} 
                label="First Name" 
                type="text" 
                onChange={handleChange}
            />
            <Form.Input 
                name="lastName" 
                value={state.lastName} 
                label="Last Name" 
                type="text" 
                onChange={handleChange}
            />
            <Form.Input 
                name="email" 
                value={state.email} 
                label="Email" 
                type="email" 
                onChange={handleChange}
            />
            <Form.Input 
                name="password" 
                value={state.password} 
                label="Password" 
                type="password"
                onChange={handleChange}
            />
            <Button type="submit" />
        </Form>      
    );
}

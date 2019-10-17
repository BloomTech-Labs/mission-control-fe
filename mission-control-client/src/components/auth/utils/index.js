import React from "react";
import Input from "../Input.js";


export function makeInputs(
    property,
    state,
    setState
) {
    function handleChange(e) {
        setState({
            ...state,
            [property]: {
                ...state[property],
                value: e.target.value 
            }
        });
    }
    return (
        <Input 
            key={property}
            name={property}
            value={state[property].value}
            label={property}
            type={state[property].type}
            error={state[property].error}
            message={state[property].message}
            handleChange={handleChange}
        />        
    )
}


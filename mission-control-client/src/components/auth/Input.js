import React from "react";
import {Form, Message} from "semantic-ui-react";

export default function(props) {
        const label = props.label
        // wherever a lowercase letter is next to an uppercase,
        // put a space between them
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .toLowerCase()
        // capitalize the letter of each first character of every word
        .replace(/\b([a-z])/g, l => l.toUpperCase()) 

    return (
        <>
            <Form.Input
                name={props.name}
                value={props.value}
                label={label}
                type={props.type}
                onChange={props.handleChange}
            />
            {
                props.error && (
                    <Message negative>
                        <Message.Header>
                            {
                                props.message
                            }
                        </Message.Header>
                    </Message>    
                )
            }
        </>
    );
}

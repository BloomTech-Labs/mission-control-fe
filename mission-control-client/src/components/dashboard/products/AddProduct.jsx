import React, {useState, useCallback } from 'react';

import gql from 'graphql-tag';
import { useMutation } from 'urql';

const POST_PRODUCT = gql `
    mutation PostProduct($name: String!) {
        createProduct(data: {name: $name}) {
            id
            name
        }
    }
`

const CreateProduct = props => {
    const [ name, setName ] = useState('');

    // adding useMutation HOOK which accepts the new mutation and returns the current state of the mutation and an executeMutation function as an array.
    const [state, executeMutation] = useMutation(POST_PRODUCT)

    const submit = useCallback(() => {
        executeMutation({name})
        console.log(name)
        console.log(state)
    }, [executeMutation, name])

    return (
        <div>
            <div>
            <input 
                type="text"
                onChange={e => setName(e.target.value)}
                placeholder="name of product"
            />
            </div>
            <button     
                disabled={state.fetching}
                onClick={submit}>
                Submit
            </button>
        </div>
    )


}


export default CreateProduct;
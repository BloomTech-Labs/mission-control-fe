// React and react Hooks
import React, {useState, useCallback } from 'react';

// GraphQl URQL and Hooks
import { useMutation } from 'urql';

// importing mutation definition for adding a new product
import { createProduct } from '../../../mutations';

// Component - CreateProduct
const CreateProduct = props => {
    const [ name, setName ] = useState('');

    // adding useMutation HOOK which accepts the new mutation and returns the current state of the mutation and an executeMutation function as an array.
    const [state, executeMutation] = useMutation(createProduct)

    const submit = useCallback(() => {
        executeMutation({name})
    }, [executeMutation, name])

    if (state.error) {
        return <p>"Sorry, already added."</p>
    }

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
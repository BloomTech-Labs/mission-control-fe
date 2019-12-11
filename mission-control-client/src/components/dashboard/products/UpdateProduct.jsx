import React, { useState, useCallback } from 'react';

// GraphQl URQL and Hooks
import { useMutation } from 'urql';

// importing mutation definition for adding a new product
import { updateProduct } from '../../../mutations';

// Component - UpdateProduct
const UpdateProduct = ({product}) => {
const [name, setName] = useState('');
const [edit, setEdit] = useState(false);

const [state, executeMutation] = useMutation(updateProduct)

const submit = useCallback(() => {
    // console.log('hello', edit, name)
    if(!state.fetching){
        executeMutation({id: product.id, name: name}).then(res => {
            // console.log(res)
        })
    }
}, [state.fetching, executeMutation, product.id, name])



    return (
        <div>
            {edit ? 
            <div>
                <input 
                    type="text"
                    onChange={e => {
                        setName(e.target.value)
                    }}
                    placeholder="EDIT name of product"
                />
                <button
                    disabled={state.fetching}
                    onClick={() => {
                        setEdit(!edit)
                        return submit()
                    }}
                >
                    ✅
                </button>
            </div> :
            <button     
                disabled={state.fetching}
                onClick={() => setEdit(!edit)}>
                Edit
            </button>
            }
        
        </div>
    )
}

export default UpdateProduct;
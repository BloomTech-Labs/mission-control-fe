import React, { useState, useCallback } from 'react';

// GraphQl URQL and Hooks
import { useMutation } from 'urql';

// importing mutation definition for adding a new product
import { deleteProduct, deleteProject } from '../../../mutations';

// Component - UpdateProduct
const DeleteProduct = ({index}) => {
const [state, executeMutation] = useMutation(deleteProduct)

const submit = useCallback(() => {
    // console.log(index)
    executeMutation({where:{id:index}})
    console.log(state)
}, [executeMutation,index, state])

    return (
        <div>   
            <button     
                disabled={state.fetching}
                onClick={submit}>
                Delete
            </button>
        </div>
    )
}

export default DeleteProduct;
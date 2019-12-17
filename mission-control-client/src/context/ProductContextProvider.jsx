import React, { useState } from 'react';

// Context 
import {ProductContext} from './ProductContext';

// AXIOS
import axiosLabsGraphQL from "../utils/axiosLabsGraphQL";
import axios from "axios";

// GQL
import { fullProjectDetailsById, peopleByProjectId } from "../queries";

const ProductContextProvider = ({children}) => {
    const [productState, setProductState] = useState(
        {
            isLoading: false,
            err: null,
            active: null,
            project: null
        }
    );

    const setActiveProduct = el => {
        setProductState({...productState, active: el})
    }

    const setSelectedProject = id => {
        axios
        .all([
            axiosLabsGraphQL.post("", { query: fullProjectDetailsById(id) }),
            axiosLabsGraphQL.post("", { query: peopleByProjectId(id) })
        ])
        .then(
            axios.spread((res, res2) => {
            const project = {
                project: res.data.data.projects,
                people: res2.data.data.projectRoles
            }
            // dispatch({ type: SET_ACTIVE_PROJECT_SUCCESS, payload: project });
            setProductState({...productState, project: project})
            })
        )
        .catch(err => {
            // dispatch({ type: SET_ACTIVE_PROJECT_FAILURE, payload: err.response });
            console.log(err)
        });
    }

    return (
        <>
            <ProductContext.Provider value={{productState, setActiveProduct, setSelectedProject}}>
                {children}
            </ProductContext.Provider>
        </>
    )
}

export default ProductContextProvider;

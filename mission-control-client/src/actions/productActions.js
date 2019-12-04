import axiosLabsGraphQL from "../utils/axiosLabsGraphQL";

import { products, product, productRoles, productRole } from "../queries";
import { createProduct, updateProduct, deleteProduct } from "../mutations";

export const GET_PRODUCTS_START = "GET_PRODUCTS_START";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";

export const GET_PRODUCT_START = "GET_PRODUCT_START";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_ERROR = "GET_PRODUCT_ERROR";

export const GET_PRODUCT_ROLES_START = "GET_PRODUCT_ROLES_START";
export const GET_PRODUCT_ROLES_SUCCESS = "GET_PRODUCT_ROLES_SUCCESS";
export const GET_PRODUCT_ROLES_ERROR = "GET_PRODUCT_ROLES_ERROR";

export const GET_PRODUCT_ROLE_START = "GET_PRODUCT_ROLE_START";
export const GET_PRODUCT_ROLE_SUCCESS = "GET_PRODUCT_ROLE_SUCCESS";
export const GET_PRODUCT_ROLE_ERROR = "GET_PRODUCT_ROLE_ERROR";

export const ADD_PRODUCT_START = "ADD_PRODUCT_START";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const ADD_PRODUCT_ERROR = "ADD_PRODUCT_ERROR";

export const UPDATE_PRODUCT_START = "UPDATE_PRODUCT_START";
export const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS";
export const UPDATE_PRODUCT_ERROR = "UPDATE_PRODUCT_ERROR";

export const DELETE_PRODUCT_START = "DELETE_PRODUCT_START";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_ERROR = "DELETE_PRODUCT_ERROR";

export const getProducts = () => {
    return dispatch => {
        dispatch({ type: GET_PRODUCTS_START });
        axiosLabsGraphQL
            .post("", { query: products })
            .then(res => {
                const products = res.data.data.products;
                dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
            })
            .catch(err =>
                dispatch({ type: GET_PRODUCTS_ERROR, payload: err.response })
            );
    };
};

export const getProduct = id => {
    return dispatch => {
        dispatch({ type: GET_PRODUCT_START });
        axiosLabsGraphQL
            .post("", { query: product(id) })
            .then(res => {
                const product = res.data.data.product;
                dispatch({ type: GET_PRODUCT_SUCCESS, payload: product });
            })
            .catch(err =>
                dispatch({ type: GET_PRODUCT_ERROR, payload: err.response })
            );
    };
};

export const getProductRoles = () => {
    return dispatch => {
        dispatch({ type: GET_PRODUCT_ROLES_START });
        axiosLabsGraphQL
            .post("", { query: productRoles })
            .then(res => {
                const productRoles = res.data.data.productRoles;
                dispatch({ type: GET_PRODUCT_ROLES_SUCCESS, payload: productRoles });
            })
            .catch(err =>
                dispatch({ type: GET_PRODUCT_ROLES_ERROR, payload: err.response })
            );
    };
};

export const getProductRole = () => {
    return dispatch => {
        dispatch({ type: GET_PRODUCT_ROLE_START });
        axiosLabsGraphQL
            .post("", { query: productRole })
            .then(res => {
                const productRole = res.data.data.productRole;
                dispatch({ type: GET_PRODUCT_ROLE_SUCCESS, payload: productRole });
            })
            .catch(err =>
                dispatch({ type: GET_PRODUCT_ROLE_ERROR, payload: err.response })
            );
    };
};

export const addProduct = data => {
    //   console.log("Add Product Called in Actions", data);
    return dispatch => {
        dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data });
    };
};
export const editProduct = (data) => {
    console.log("Edit Product Called in Actions AKA update", data);
    return dispatch => {
        dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data })
    };
};

export const removeProduct = data => {
    //   console.log("Delete Product Called in Actions",data);
    if (data.search("violate")) {
        return dispatch => {
            dispatch({ type: DELETE_PRODUCT_ERROR, payload: data });
        };
    } else {
        return dispatch => {
            dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: data });
        };
    }
};
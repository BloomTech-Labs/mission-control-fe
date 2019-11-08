import axiosLabsGraphQL from '../utils/axiosLabsGraphQL'

import {
    products,
    product,
    productRoles,
    productRole,
} from '../queries';

export const GET_PRODUCTS_START = 'GET_PRODUCTS_START';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';

export const GET_PRODUCT_START = 'GET_PRODUCT_START';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR';

export const GET_PRODUCT_ROLES_START = 'GET_PRODUCT_ROLES_START';
export const GET_PRODUCT_ROLES_SUCCESS = 'GET_PRODUCT_ROLES_SUCCESS';
export const GET_PRODUCT_ROLES_ERROR = 'GET_PRODUCT_ROLES_ERROR';

export const GET_PRODUCT_ROLE_START = 'GET_PRODUCT_ROLE_START';
export const GET_PRODUCT_ROLE_SUCCESS = 'GET_PRODUCT_ROLE_SUCCESS';
export const GET_PRODUCT_ROLE_ERROR = 'GET_PRODUCT_ROLE_ERROR';

export const getProducts = () => {
    return dispatch => {
        dispatch({ type: GET_PRODUCTS_START });
        axiosLabsGraphQL
            .post('', { query: products })
            .then(res => {
                const products = res.data.data.products;
                dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products })
            })
            .catch(err => dispatch({ type: GET_PRODUCTS_ERROR, payload: err.response }));
    };
};

export const getProduct = id => {
    return dispatch => {
        dispatch({ type: GET_PRODUCT_START });
        axiosLabsGraphQL
            .post('', { query: product(id) })
            .then(res => {
                const product = res.data.data.product;
                dispatch({ type: GET_PRODUCT_SUCCESS, payload: product })
            })
            .catch(err => dispatch({ type: GET_PRODUCT_ERROR, payload: err.response }));
    };
};

export const getProductRoles = () => {
    return dispatch => {
        dispatch({ type: GET_PRODUCT_ROLES_START });
        axiosLabsGraphQL
            .post('', { query: productRoles })
            .then(res => {
                const productRoles = res.data.data.productRoles;
                dispatch({ type: GET_PRODUCT_ROLES_SUCCESS, payload: productRoles })
            })
            .catch(err => dispatch({ type: GET_PRODUCT_ROLES_ERROR, payload: err.response }));
    }
};

export const getProductRole = () => {
    return dispatch => {
        dispatch({ type: GET_PRODUCT_ROLE_START });
        axiosLabsGraphQL
            .post('', { query: productRole })
            .then(res => {
                const productRole = res.data.data.productRole;
                dispatch({ type: GET_PRODUCT_ROLE_SUCCESS, payload: productRole })
            })
            .catch(err => dispatch({ type: GET_PRODUCT_ROLE_ERROR, payload: err.response }));
    }
};

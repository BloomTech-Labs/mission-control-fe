import {
    GET_PRODUCTS_START,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_PRODUCT_START,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_ERROR,
    GET_PRODUCT_ROLES_START,
    GET_PRODUCT_ROLES_SUCCESS,
    GET_PRODUCT_ROLES_ERROR,
    GET_PRODUCT_ROLE_START,
    GET_PRODUCT_ROLE_SUCCESS,
    GET_PRODUCT_ROLE_ERROR,
} from '../actions'

const initialState = {
    isLoading: false,
    products: [],
    product: {},
    productRoles: [],
    productRole: {},
    error: ''
};

export const productStore = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_START:
            return {
                ...state,
                isLoading:true
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading:false,
                products: action.payload,
                error: ''
            }
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_PRODUCT_START:
            return {
                ...state,
                isLoading:true
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading:false,
                product: action.payload,
                error: ''
            }
        case GET_PRODUCT_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_PRODUCT_ROLES_START:
            return {
                ...state,
                isLoading:true
            }
        case GET_PRODUCT_ROLES_SUCCESS:
            return {
                ...state,
                isLoading:false,
                productRoles: action.payload,
                error: ''
            }
        case GET_PRODUCT_ROLES_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }       
        case GET_PRODUCT_ROLE_START:
            return {
                ...state,
                isLoading:true
            }
        case GET_PRODUCT_ROLE_SUCCESS:
            return {
                ...state,
                isLoading:false,
                productRole: action.payload,
                error: ''
            }
        case GET_PRODUCT_ROLE_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }           
        default:
            return state;
    }
};

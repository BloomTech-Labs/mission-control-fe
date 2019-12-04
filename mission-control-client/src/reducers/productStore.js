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
  ADD_PRODUCT_START,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  UPDATE_PRODUCT_START,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_ERROR,
  DELETE_PRODUCT_START,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR
} from "../actions";

const initialState = {
  isLoading: false,
  products: [],
  product: {},
  productRoles: [],
  productRole: {},
  error: ""
};

export const productStore = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        error: ""
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case GET_PRODUCT_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        product: action.payload,
        error: ""
      };
    case GET_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case GET_PRODUCT_ROLES_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_PRODUCT_ROLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productRoles: action.payload,
        error: ""
      };
    case GET_PRODUCT_ROLES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case GET_PRODUCT_ROLE_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_PRODUCT_ROLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productRole: action.payload,
        error: ""
      };
    case GET_PRODUCT_ROLE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case ADD_PRODUCT_START:
      return {
        ...state,
        isLoading: true
      };
    case ADD_PRODUCT_SUCCESS:
      const newProds = [...state.products];
      const newItem = {
        id: action.payload.id,
        name: action.payload.name,
        projects: []
      };
      newProds.push(newItem);
      console.log("New List", newProds);
      return {
        ...state,
        isLoading: false,
        products: newProds,
        error: ""
      };
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case UPDATE_PRODUCT_START:
      return {
        ...state,
        isLoading: true
      };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state
      };
    case UPDATE_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case DELETE_PRODUCT_START:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_PRODUCT_SUCCESS:
      const newDelProds = [...state.products];
      let index = "";
      newDelProds.forEach((i, x) => {
        if (i.id === action.payload.id) {
          index = x;
        }
      });
      newDelProds.splice(index, 1);
      return {
        ...state,
        products: newDelProds
      };
    case DELETE_PRODUCT_ERROR:
      console.log("DATA ERROR", action.payload);
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

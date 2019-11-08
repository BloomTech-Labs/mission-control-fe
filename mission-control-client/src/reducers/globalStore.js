import {
  GET_ROLES_START,
  GET_ROLES_SUCCESS,
  GET_ROLES_ERROR,
  GET_ROLE_START,
  GET_ROLE_SUCCESS,
  GET_ROLE_ERROR,
  GET_LAMBDA_ROLES_START,
  GET_LAMBDA_ROLES_SUCCESS,
  GET_LAMBDA_ROLES_ERROR,
  GET_LAMBDA_ROLE_START,
  GET_LAMBDA_ROLE_SUCCESS,
  GET_LAMBDA_ROLE_ERROR
} from "../actions/roleActions.js";

import { LOGIN_SUCCESS } from "../actions";

const initialState = {
  isLoading: false,
  error: "",
  roles: [],
  role: {},
  lambdaRoles: [],
  lambdaRole: {},
  user: {}
};

export const globalStore = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROLE_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_ROLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        role: action.payload,
        error: ""
      };
    case GET_ROLE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case GET_ROLES_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_ROLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        roles: action.payload,
        error: ""
      };
    case GET_ROLES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case GET_LAMBDA_ROLES_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_LAMBDA_ROLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        lambdaRoles: action.payload,
        error: ""
      };
    case GET_LAMBDA_ROLES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case GET_LAMBDA_ROLE_START:
      return {
        ...state,
        isLoading: true,
        lambdaRole: action.payload
      };
    case GET_LAMBDA_ROLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        lambdaRole: action.payload,
        error: ""
      };
    case GET_LAMBDA_ROLE_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

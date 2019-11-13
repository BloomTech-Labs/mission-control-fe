import { axiosWithAuth } from '../utils/axiosWithAuth'

export const GET_USERS_START = 'GET_USERS_START'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_ERROR = 'GET_USERS_ERROR'

export const getUsers = () => {
    return dispatch => {
        dispatch({type: GET_USERS_START})
        axiosWithAuth()
            .get('https://dw0z95u459ou2.cloudfront.net/api/users')
            .then( res => dispatch({type: GET_USERS_SUCCESS, payload:res.data.users}))
            .catch( err => dispatch({type: GET_USERS_ERROR, payload: err.response}) )
    }
}

export const GET_MC_ROLES_START = 'GET_MC_ROLES_START'
export const GET_MC_ROLES_SUCCESS = 'GET_MC_ROLES_SUCCESS'
export const GET_MC_ROLES_ERROR = 'GET_MC_ROLES_ERROR'

export const getMCRoles = () => {
    return dispatch => {
        dispatch({type: GET_MC_ROLES_START})
        axiosWithAuth()
            .get('https://dw0z95u459ou2.cloudfront.net/api/users/roles')
            .then( res => dispatch({type: GET_MC_ROLES_SUCCESS, payload:res.data.roles}))
            .catch( err => dispatch({type: GET_MC_ROLES_ERROR, payload: err.response}) )
    }
}

export const UPDATE_MC_ROLES_START = 'UPDATE_MC_ROLES_START'
export const UPDATE_MC_ROLES_SUCCESS = 'UPDATE_MC_ROLES_SUCCESS'
export const UPDATE_MC_ROLES_ERROR = 'UPDATE_MC_ROLES_ERROR'

export const updateMCRoles = (values) => {
    console.log(values)
    return dispatch => {
        dispatch({type: UPDATE_MC_ROLES_START})
        axiosWithAuth()
            .put('https://dw0z95u459ou2.cloudfront.net/api/users', values)
            .then( res => {
                dispatch({type: UPDATE_MC_ROLES_SUCCESS, payload:res.data.updateUser})
            })
            .catch( err => dispatch({type: UPDATE_MC_ROLES_ERROR, payload: err.response}) )
    }
}
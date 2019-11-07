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

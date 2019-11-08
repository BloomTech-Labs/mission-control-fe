export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const loginSuccess = (user) => {
    return dispatch => {
        dispatch({type: LOGIN_SUCCESS, payload: user})
    }
}
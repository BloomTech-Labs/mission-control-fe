import axiosLabsGraphQL from '../utils/axiosLabsGraphQL'

import {
    persons,
    person
} from '../queries'


export const GET_PERSONS_START = 'GET_PERSONS_START'
export const GET_PERSONS_SUCCESS = 'GET_PERSONS_SUCCESS'
export const GET_PERSONS_ERROR = 'GET_PERSONS_ERROR'

export const getPersons = () => {
    return dispatch => {
        dispatch({type: GET_PERSONS_START})
        console.log(process.env)
        axiosLabsGraphQL
            .post(axiosLabsGraphQL.baseURL, {query: persons})
            .then(res => {
                console.log(res)
                dispatch({type:GET_PERSONS_SUCCESS, payload: res.data})
            })
            .catch( err => dispatch({type: GET_PERSONS_ERROR, payload: err.response}))
    }
}
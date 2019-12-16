// import axiosLabsGraphQL from '../utils/axiosLabsGraphQL'

// import {
//     roles,
//     role,
//     lambdaRole,
//     lambdaRoles
// } from '../queries'


// export const GET_ROLES_START = 'GET_ROLES_START'
// export const GET_ROLES_SUCCESS = 'GET_ROLES_SUCCESS'
// export const GET_ROLES_ERROR = 'GET_ROLES_ERROR'

// export const getRoles = () => {
//     return dispatch => {
//         dispatch({type: GET_ROLES_START})
//         axiosLabsGraphQL
//             .post('', {query: roles})
//             .then(res => {
//                 const roles = res.data.data.roles
//                 dispatch({type:GET_ROLES_SUCCESS, payload: roles})
//             })
//             .catch( err => dispatch({type: GET_ROLES_ERROR, payload: err.response}))
//     }
// }

// export const GET_ROLE_START = 'GET_ROLE_START'
// export const GET_ROLE_SUCCESS = 'GET_ROLE_SUCCESS'
// export const GET_ROLE_ERROR = 'GET_ROLE_ERROR'

// export const getRole = (id) => {
//     return dispatch => {
//         dispatch({type: GET_ROLE_START})
//         axiosLabsGraphQL
//             .post('', {query: role(id)})
//             .then(res => {

//                 dispatch({type:GET_ROLES_SUCCESS, payload: res})
//             })
//             .catch( err => dispatch({type: GET_ROLES_ERROR, payload: err.response}))
//     }
// }


// export const GET_LAMBDA_ROLES_START = 'GET_LAMBDA_ROLES_START'
// export const GET_LAMBDA_ROLES_SUCCESS = 'GET_LAMBDA_ROLES_SUCCESS'
// export const GET_LAMBDA_ROLES_ERROR = 'GET_LAMBDA_ROLES_ERROR'

// export const getLambdaRoles = () => {
//     return dispatch => {
//         dispatch({type: GET_LAMBDA_ROLES_START})
//         axiosLabsGraphQL
//             .post('', {query: lambdaRoles})
//             .then(res => {
//                 const lambdaRoles = res.data.data.lambdaRoles
//                 dispatch({type: GET_LAMBDA_ROLES_SUCCESS, payload: lambdaRoles})
//             })
//             .catch( err => {
//                 dispatch({type: GET_LAMBDA_ROLES_ERROR, payload: err.response})

//             })
//     }
// }

// export const GET_LAMBDA_ROLE_START = 'GET_LAMBDA_ROLE_START'
// export const GET_LAMBDA_ROLE_SUCCESS = 'GET_LAMBDA_ROLE_SUCCESS'
// export const GET_LAMBDA_ROLE_ERROR = 'GET_LAMBDA_ROLE_ERROR'

// export const getLambdaRole = (id) => {
//     return dispatch => {
//         dispatch({type: GET_LAMBDA_ROLE_START})
//         axiosLabsGraphQL
//             .post('', {query: lambdaRole(id)})
//             .then(res => {
//                 dispatch({type: GET_LAMBDA_ROLE_SUCCESS, payload: res.data.data})
//             })
//             .catch( err => {
//                 dispatch({type: GET_LAMBDA_ROLE_ERROR, payload: err.response})

//             })
//     }
// }
import axiosLabsGraphQL from '../utils/axiosLabsGraphQL'

import {
    persons,
    person,
    peopleGroups,
    peopleGroup,
    peopleGroupMembers,
    peopleGroupMember,
} from '../queries'

export const GET_PERSONS_START = 'GET_PERSONS_START'
export const GET_PERSONS_SUCCESS = 'GET_PERSONS_SUCCESS'
export const GET_PERSONS_ERROR = 'GET_PERSONS_ERROR'

export const getPersons = () => {
    return dispatch => {
        dispatch({type: GET_PERSONS_START})
        axiosLabsGraphQL
            .post('', {query: persons})
            .then(res => {
                const persons = res.data.data.persons
                dispatch({type:GET_PERSONS_SUCCESS, payload: persons})
            })
            .catch( err => dispatch({type: GET_PERSONS_ERROR, payload: err.response}))
    }
}

export const GET_PERSON_START = 'GET_PERSON_START'
export const GET_PERSON_SUCCESS = 'GET_PERSON_SUCCESS'
export const GET_PERSON_ERROR = 'GET_PERSON_ERROR'

export const getPerson = (id) => {
    return dispatch => {
        dispatch({type: GET_PERSON_START})
        axiosLabsGraphQL
            .post('', {query: person(id)})
            .then(res => {
                dispatch({type: GET_PERSON_SUCCESS, payload: res.data})
            })
            .catch( err => {
                dispatch({type: GET_PERSON_ERROR, payload: err.response})
                console.log(err)
            })
    }
}

// TODO EMPTY DATASET NEEDS WORK
export const GET_PEOPLE_GROUPS_START = 'GET_PEOPLE_GROUPS_START'
export const GET_PEOPLE_GROUPS_SUCCESS = 'GET_PEOPLE_GROUPS_SUCCESS'
export const GET_PEOPLE_GROUPS_ERROR = 'GET_PEOPLE_GROUPS_ERROR'

export const getPeopleGroups = () => {
    return dispatch => {
        dispatch({type: GET_PEOPLE_GROUP_START})
        axiosLabsGraphQL
            .post('', {query: peopleGroups})
            .then(res => {
                console.log(res)
                dispatch({type: GET_PEOPLE_GROUP_SUCCESS, payload: res.data})
            })
            .catch( err => {
                console.log(err)
                dispatch({type: GET_PEOPLE_GROUP_ERROR, payload: err.response})
            })
    }
}

// TODO EMPTY DATASET NEEDS WORK - NEEDS TO BE TESTED
export const GET_PEOPLE_GROUP_START = 'GET_PEOPLE_GROUP_START'
export const GET_PEOPLE_GROUP_SUCCESS = 'GET_PEOPLE_GROUP_SUCCESS'
export const GET_PEOPLE_GROUP_ERROR = 'GET_PEOPLE_GROUP_ERROR'

export const getPeopleGroup = (id) => {
    return dispatch => {
        dispatch({type: GET_PEOPLE_GROUPS_START})
        axiosLabsGraphQL
            .post('', {query: peopleGroup(id)})
            .then(res => {
                console.log(res)
                dispatch({type: GET_PEOPLE_GROUPS_SUCCESS, payload: res.data})
            })
            .catch( err => {
                console.log(err)
                dispatch({type: GET_PEOPLE_GROUPS_ERROR, payload: err.response})
            })
    }
}

export const GET_PEOPLE_GROUP_MEMBERS_START = 'GET_PEOPLE_GROUP_MEMBERS_START';
export const GET_PEOPLE_GROUP_MEMBERS_SUCCESS = 'GET_PEOPLE_GROUP_MEMBERS_SUCCESS';
export const GET_PEOPLE_GROUP_MEMBERS_ERROR = 'GET_PEOPLE_GROUP_MEMBERS_ERROR';

export const getPeopleGroupMembers = () => {
    return dispatch => {
        dispatch({type: GET_PEOPLE_GROUP_MEMBERS_START})
        axiosLabsGraphQL
            .post('', {query: peopleGroupMembers})
            .then(res => {
                const peopleGroupMembers = res.data.data.peopleGroupMembers;
                console.log(peopleGroupMembers)
                dispatch({type: GET_PEOPLE_GROUP_MEMBERS_SUCCESS, payload: peopleGroupMembers})
            })
            .catch( err => {
                console.log(err)
                dispatch({type: GET_PEOPLE_GROUP_MEMBERS_ERROR, payload: err.response})
            });
    };
};

export const GET_PEOPLE_GROUP_MEMBER_START = 'GET_PEOPLE_GROUP_MEMBER_START';
export const GET_PEOPLE_GROUP_MEMBER_SUCCESS = 'GET_PEOPLE_GROUP_MEMBER_SUCCESS';
export const GET_PEOPLE_GROUP_MEMBER_ERROR = 'GET_PEOPLE_GROUP_MEMBER_ERROR';

export const getPeopleGroupMember = id => {
    return dispatch => {
        dispatch({type: GET_PEOPLE_GROUP_MEMBER_START})
        axiosLabsGraphQL
            .post('', {query: peopleGroupMember(id)})
            .then(res => {
                const peopleGroupMember = res.data.data.peopleGroupMember;
                console.log(peopleGroupMember)
                dispatch({type: GET_PEOPLE_GROUP_MEMBER_SUCCESS, payload: peopleGroupMember})
            })
            .catch( err => {
                console.log(err)
                dispatch({type: GET_PEOPLE_GROUP_MEMBER_ERROR, payload: err.response})
            });
    };
};
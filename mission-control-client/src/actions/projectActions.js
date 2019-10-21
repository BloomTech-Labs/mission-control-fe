import axiosLabsGraphQL from '../utils/axiosLabsGraphQL'

import {
    projects,
    project,
    projectGroups,
    projectGroup,
    projectGroupMember,
    projectGroupMembers,
    projectRoles,
    projectRole,
} from '../queries';

export const GET_PROJECTS_START = 'GET_PROJECTS_START';
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
export const GET_PROJECTS_ERROR = 'GET_PROJECTS_ERROR';

export const GET_PROJECT_START = 'GET_PROJECT_START';
export const GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS';
export const GET_PROJECT_ERROR = 'GET_PROJECT_ERROR';

export const GET_PROJECT_GROUPS_START = 'GET_PROJECT_GROUPS_START';
export const GET_PROJECT_GROUPS_SUCCESS = 'GET_PROJECT_GROUPS_SUCCESS';
export const GET_PROJECT_GROUPS_ERROR = 'GET_PROJECT_GROUPS_ERROR';

export const GET_PROJECT_GROUP_START = 'GET_PROJECT_GROUP_START';
export const GET_PROJECT_GROUP_SUCCESS = 'GET_PROJECT_GROUP_SUCCESS';
export const GET_PROJECT_GROUP_ERROR = 'GET_PROJECT_GROUP_ERROR';

// ? ALL PROJECT GROUP MEMBERS : [yes - AG] : null
export const GET_PROJECT_GROUP_MEMBERS_START = 'GET_PROJECT_GROUP_MEMBERS_START';
export const GET_PROJECT_GROUP_MEMBERS_SUCCESS = 'GET_PROJECT_GROUP_MEMBERS_SUCCESS';
export const GET_PROJECT_GROUP_MEMBERS_ERROR = 'GET_PROJECT_GROUP_MEMBERS_ERROR';

// ? SINGLE PROJECT GROUP MEMBER : [yes - AG] : null
export const GET_PROJECT_GROUP_MEMBER_START = 'GET_PROJECT_GROUP_MEMBER_START';
export const GET_PROJECT_GROUP_MEMBER_SUCCESS = 'GET_PROJECT_GROUP_MEMBER_SUCCESS';
export const GET_PROJECT_GROUP_MEMBER_ERROR = 'GET_PROJECT_GROUP_MEMBER_ERROR';

export const GET_PROJECT_ROLES_START = 'GET_PROJECT_ROLES_START';
export const GET_PROJECT_ROLES_SUCCESS = 'GET_PROJECT_ROLES_SUCCESS';
export const GET_PROJECT_ROLES_ERROR = 'GET_PROJECT_ROLES_ERROR';

export const GET_PROJECT_ROLE_START = 'GET_PROJECT_ROLE_START';
export const GET_PROJECT_ROLE_SUCCESS = 'GET_PROJECT_ROLE_SUCCESS';
export const GET_PROJECT_ROLE_ERROR = 'GET_PROJECT_ROLE_ERROR';

export const getProjects = () => {
    return dispatch => {
        dispatch({ type: GET_PROJECTS_START });
        axiosLabsGraphQL
            .post('', { query: projects })
            .then(res => {
                const projects = res.data.data.projects;
                dispatch({ type: GET_PROJECTS_SUCCESS, payload: projects })
            })
            .catch(err => dispatch({ type: GET_PROJECTS_ERROR, payload: err.response }));
    };
};

export const getProject = id => {
    return dispatch => {
        dispatch({ type: GET_PROJECT_START });
        axiosLabsGraphQL
            .post('', { query: project(id) })
            .then(res => {
                const project = res.data.data.project;
                console.log(project)
                dispatch({ type: GET_PROJECT_SUCCESS, payload: project })
            })
            .catch(err => dispatch({ type: GET_PROJECT_ERROR, payload: err.response }));
    };
};

// TODO NEEDS LOOKING INTO RETURNS UNDEFINED
export const getProjectGroups = () => {
    return dispatch => {
        dispatch({ type: GET_PROJECT_GROUPS_START });
        axiosLabsGraphQL
            .post('', { query: projectGroups })
            .then(res => {
                const projectGroups = res;
                console.log(projectGroups)
                dispatch({ type: GET_PROJECT_GROUPS_SUCCESS, payload: projectGroups })
            })
            .catch(err => dispatch({ type: GET_PROJECT_GROUPS_ERROR, payload: err.response }));
    };
};

// TODO NEEDS LOOKING INTO RETURNS UNDEFINED
export const getProjectGroup = id => {
    return dispatch => {
        dispatch({ type: GET_PROJECT_GROUP_START });
        axiosLabsGraphQL
            .post('', { query: projectGroup(id) })
            .then(res => {
                const projectGroup = res.data.data.projectGroup;
                console.log(projectGroup)
                dispatch({ type: GET_PROJECT_GROUP_SUCCESS, payload: projectGroup })
            })
            .catch(err => dispatch({ type: GET_PROJECT_GROUP_ERROR, payload: err.response }));
    };
};

// TODO NEEDS LOOKING INTO RETURNS UNDEFINED
export const getProjectGroupMembers = () => {
    return dispatch => {
        dispatch({ type: GET_PROJECT_GROUP_MEMBERS_START });
        axiosLabsGraphQL
            .post('', { query: projectGroupMembers })
            .then(res => {
                const members = res.data;
                console.log(members)
                dispatch({ type: GET_PROJECT_GROUP_MEMBERS_SUCCESS })
            })
            .catch(err => dispatch({ type: GET_PROJECT_GROUP_MEMBERS_ERROR, payload: err.response }));
    };
};

// TODO NEEDS LOOKING INTO RETURNS UNDEFINED
export const getProjectGroupMember = (id) => {
    return dispatch => {
        dispatch({ type: GET_PROJECT_GROUP_MEMBER_START });
        axiosLabsGraphQL
            .post('', { query: projectGroupMember(id) })
            .then(res => {
                const member = res.data;
                console.log(member)
                dispatch({ type: GET_PROJECT_GROUP_MEMBER_SUCCESS })
            })
            .catch(err => dispatch({ type: GET_PROJECT_GROUP_MEMBER_ERROR, payload: err.response }));
    };
};


export const getProjectRoles = () => {
    return dispatch => {
        dispatch({ type: GET_PROJECT_ROLES_START });
        axiosLabsGraphQL
            .post('', { query: projectRoles })
            .then(res => {
                const projectRoles = res.data.data.projectRoles;
                console.log(projectRoles)
                dispatch({ type: GET_PROJECT_ROLES_SUCCESS })
            })
            .catch(err => dispatch({ type: GET_PROJECT_ROLES_ERROR, payload: err.response }));
    };
};

export const getProjectRole = id => {
    return dispatch => {
        dispatch({ type: GET_PROJECT_ROLE_START });
        axiosLabsGraphQL
            .post('', { query: projectRole(id) })
            .then(res => {
                const projectRole = res.data.data.projectRole;
                console.log(projectRole)
                dispatch({ type: GET_PROJECT_ROLE_SUCCESS })
            })
            .catch(err => dispatch({ type: GET_PROJECT_ROLE_ERROR, payload: err.response }));
    };
};
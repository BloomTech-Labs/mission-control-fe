import {
    GET_PROJECTS_START,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_ERROR,
    GET_PROJECT_START,
    GET_PROJECT_SUCCESS,
    GET_PROJECT_ERROR,
    GET_PROJECT_GROUPS_START,
    GET_PROJECT_GROUPS_SUCCESS,
    GET_PROJECT_GROUPS_ERROR,
    GET_PROJECT_GROUP_START,
    GET_PROJECT_GROUP_SUCCESS,
    GET_PROJECT_GROUP_ERROR,
    GET_PROJECT_GROUP_MEMBERS_START,
    GET_PROJECT_GROUP_MEMBERS_SUCCESS,
    GET_PROJECT_GROUP_MEMBERS_ERROR,
    GET_PROJECT_GROUP_MEMBER_START,
    GET_PROJECT_GROUP_MEMBER_SUCCESS,
    GET_PROJECT_GROUP_MEMBER_ERROR,
    GET_PROJECT_ROLES_START,
    GET_PROJECT_ROLES_SUCCESS,
    GET_PROJECT_ROLES_ERROR,
    GET_PROJECT_ROLE_START,
    GET_PROJECT_ROLE_SUCCESS,
    GET_PROJECT_ROLE_ERROR,
    GET_PROJECT_ROLE_BY_EMAIL_START,
    GET_PROJECT_ROLE_BY_EMAIL_SUCCESS,
    GET_PROJECT_ROLE_BY_EMAIL_ERROR, 
    RESET_PROJECTS 
} from '../actions'

const initialState = {
    isLoading: false,
    projects: [],
    project: {},
    projectGroups: [],
    projectGroup: {},
    projectGroupMembers: [],
    projectGroupMember: {},
    projectRoles: [],
    projectRole: {},
    projectRoleByEmail: [],
    error: ''
};

export const projectStore = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROJECTS_START:
            return{
                ...state,
                isLoading:true
            }
        case GET_PROJECTS_SUCCESS:
            return{
                ...state,
                isLoading:false,
                projects: action.payload,
                error: ''
            }
        case GET_PROJECTS_ERROR:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_PROJECT_START:
            return{
                ...state,
                isLoading:true
            }
        case GET_PROJECT_SUCCESS:
            return{
                ...state,
                isLoading:false,
                project: action.payload,
                error: ''
            }
        case GET_PROJECT_ERROR:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }    
        case GET_PROJECT_GROUPS_START:
            return{
                ...state,
                isLoading:true
            }
        case GET_PROJECT_GROUPS_SUCCESS:
            return{
                ...state,
                isLoading:false,
                projectGroups: action.payload,
                error: ''
            }
        case GET_PROJECT_GROUPS_ERROR:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }        
        case GET_PROJECT_GROUP_START:
            return{
                ...state,
                isLoading:true
            }
        case GET_PROJECT_GROUP_SUCCESS:
            return{
                ...state,
                isLoading:false,
                projectGroup: action.payload,
                error: ''
            }
        case GET_PROJECT_GROUP_ERROR:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_PROJECT_GROUP_MEMBERS_START:
            return {
                ...state,
                isLoading: true,
            }
        case GET_PROJECT_GROUP_MEMBERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                projectGroupMembers: action.payload
            }
        case GET_PROJECT_GROUP_MEMBERS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_PROJECT_GROUP_MEMBER_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_PROJECT_GROUP_MEMBER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                projectGroupMember: action.payload
            }
        case GET_PROJECT_GROUP_MEMBER_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }                                                                                                                        
        case GET_PROJECT_ROLES_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_PROJECT_ROLES_SUCCESS:
            return{
                ...state,
                isLoading:false,
                projectRoles: action.payload,
                error: ''
            }
        case GET_PROJECT_ROLES_ERROR:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }        
            case GET_PROJECT_ROLE_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_PROJECT_ROLE_SUCCESS:
            return{
                ...state,
                isLoading:false,
                projectRole: action.payload,
                error: ''
            }
        case GET_PROJECT_ROLE_ERROR:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }       
        case GET_PROJECT_ROLE_BY_EMAIL_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }    
        case GET_PROJECT_ROLE_BY_EMAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                projectRoleByEmail: action.payload
            }     
        case GET_PROJECT_ROLE_BY_EMAIL_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case RESET_PROJECTS:
          return {
            ...state,
            projectRoleByEmail: action.payload
          }
        default:
            return state;
    }
};

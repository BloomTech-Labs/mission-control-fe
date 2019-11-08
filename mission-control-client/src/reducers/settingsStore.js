import {
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_ERROR,
    GET_MC_ROLES_START,
    GET_MC_ROLES_SUCCESS,
    GET_MC_ROLES_ERROR,
    UPDATE_MC_ROLES_START,
    UPDATE_MC_ROLES_SUCCESS,
    UPDATE_MC_ROLES_ERROR
} from '../actions'

const initialState = {
    missionControlUsers: [],
    isLoading: '',
    error:'',
    currentSelected: [],
    MCRoles: []
}

export const settingsStore = ( state = initialState, action) =>{
    switch(action.type){
        case GET_USERS_START:
            return{
                ...state,
                isLoading:true
            }
        case GET_USERS_SUCCESS:
            return{
                ...state,
                isLoading:false,
                missionControlUsers: action.payload
            }
        case GET_USERS_ERROR:
            return{
                ...state,
                isLoading:false,
                error: action.payload
            }
        case GET_MC_ROLES_START:
            return{
                ...state,
                isLoading:true
            }
        case GET_MC_ROLES_SUCCESS:
            return{
                ...state,
                isLoading:false,
                MCRoles: action.payload
            }
        case GET_MC_ROLES_ERROR:
            return{
                ...state,
                isLoading:false,
                error: action.payload
            }
        case UPDATE_MC_ROLES_START:
            return{
                ...state,
                isLoading:true
            }
        case UPDATE_MC_ROLES_SUCCESS:
            return{
                ...state,
                isLoading:false,
                missionControlUsers: state.missionControlUsers.map( user => {
                        if(user.userId === action.payload.id){
                            console.log('here')
                            return {
                                ...user, role: action.payload.role
                            }
                        }else{
                            return user
                        }
                    })
                
            }
        case UPDATE_MC_ROLES_ERROR:
            return{
                ...state,
                isLoading:false,
                error: action.payload
            }
        default:    
            return state
    }
}
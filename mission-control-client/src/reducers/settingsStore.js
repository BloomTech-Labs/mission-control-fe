import {
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_ERROR,
} from '../actions'

const initialState = {
    missionControlUsers: [],
    isLoading: '',
    error:'',
    currentSelected: []
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
        default:    
            return state
    }
}
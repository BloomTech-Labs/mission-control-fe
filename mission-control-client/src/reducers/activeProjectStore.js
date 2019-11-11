import { SET_ACTIVE_PROJECT, SET_ACTIVE_PROJECT_SUCCESS, SET_ACTIVE_PROJECT_FAILURE } from '../actions/activeProjectActions';

const initialState = {
  active: null,
  people: null,
  isLoading: false,
  err: null
};

export const activeProjectStore = (state = initialState, action) => {
  switch(action.type) {
    case SET_ACTIVE_PROJECT:
      return {
        ...state,
        isLoading: true
      }
    case SET_ACTIVE_PROJECT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        active: action.payload
      }
    case SET_ACTIVE_PROJECT_FAILURE:
      return {
        ...state,
        isLoading: false,
        err: action.payload
      }
    default:
      return state
  }
}

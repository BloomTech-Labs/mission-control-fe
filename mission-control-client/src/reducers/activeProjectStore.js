import { SET_ACTIVE_PROJECT } from '../actions/activeProjectActions';

const initialState = {
  active: null
};

export const activeProjectStore = (state = initialState, action) => {
  switch(action.type) {
    case SET_ACTIVE_PROJECT:
      return {
        ...state,
        active: action.payload
      }
    default:
      return state
  }
}

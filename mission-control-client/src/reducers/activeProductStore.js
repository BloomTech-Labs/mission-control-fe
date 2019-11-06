import { SET_ACTIVE_PRODUCT } from '../actions/activeProductActions';

const initialState = {
  active: null
}

export const activeProductStore = (state = initialState, action) => {
  switch(action.type) {
    case SET_ACTIVE_PRODUCT:
      return {
        ...state,
        active: action.payload
      }
    default:
      return state
  }
}
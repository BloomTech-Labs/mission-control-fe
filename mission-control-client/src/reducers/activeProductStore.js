import {
  SET_ACTIVE_PRODUCT,
  SET_ACTIVE_PROJECT_START,
  SET_ACTIVE_PROJECT_SUCCESS,
  SET_ACTIVE_PROJECT_FAILURE
} from "../actions/activeProductActions";

const initialState = {
  isLoading: false,
  err: null,
  active: null,
  project: null
};

export const activeProductStore = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_PRODUCT:
      return {
        ...state,
        active: action.payload
      };
    case SET_ACTIVE_PROJECT_START:
      return {
        ...state,
        isLoading: true
      }
    case SET_ACTIVE_PROJECT_SUCCESS:
      return {
        ...state,
        project: action.payload,
        isLoading: false
      }
    case SET_ACTIVE_PROJECT_FAILURE:
      return {
        ...state,
        err: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
};

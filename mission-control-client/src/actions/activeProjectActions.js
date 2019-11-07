export const SET_ACTIVE_PROJECT = "SET_ACTIVE_PROJECT";

export const setActiveProject = el => {
  return dispatch => {
    dispatch({type: SET_ACTIVE_PROJECT, payload: el})
  }
}

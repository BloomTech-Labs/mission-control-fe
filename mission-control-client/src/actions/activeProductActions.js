export const SET_ACTIVE_PRODUCT = "SET_ACTIVE_PRODUCT";

export const setActiveProduct = el => {
  return dispatch => {
    dispatch({type: SET_ACTIVE_PRODUCT, payload: el})
  }
}
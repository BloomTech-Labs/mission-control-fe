import axios from 'axios';
import { peopleByProjectId } from '../queries';

export const SET_ACTIVE_PROJECT = "SET_ACTIVE_PROJECT";
export const SET_ACTIVE_PROJECT_SUCCESS = 'SET_ACTIVE_PROJECT_SUCCESS';
export const SET_ACTIVE_PROJECT_FAILURE = 'SET_ACTIVE_PROJECT_FAILURE';

export const setActiveProject = el => {
  return dispatch => {
    axios
      .post("", { query: peopleByProjectId(el.id) })
      .then(res =>{
        console.log(res);
        const project = res.data;
        dispatch({ type: SET_ACTIVE_PROJECT_SUCCESS, payload: project });
      })
      .catch(err => {
        dispatch({ type: SET_ACTIVE_PROJECT_FAILURE, payload: err.response });
      });
  }
}

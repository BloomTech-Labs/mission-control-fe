import { peopleByProjectId } from "../queries";
import axiosLabsGraphQL from "../utils/axiosLabsGraphQL";

export const SET_ACTIVE_PROJECT = "SET_ACTIVE_PROJECT";
export const SET_ACTIVE_PROJECT_SUCCESS = "SET_ACTIVE_PROJECT_SUCCESS";
export const SET_ACTIVE_PROJECT_FAILURE = "SET_ACTIVE_PROJECT_FAILURE";

export const setActiveProject = el => {
  return dispatch => {
    console.log("FROM PROJECT ACTIONS")
    dispatch({ type: SET_ACTIVE_PROJECT });
    axiosLabsGraphQL
      .post("", { query: peopleByProjectId(el.project.id) })
      .then(res => {
        console.log("FROM THEN IN PROJECT ACTIONS")
        const projectDetails = {
          people: res.data.data.projectRoles,
          project: el
        };
        dispatch({ type: SET_ACTIVE_PROJECT_SUCCESS, payload: projectDetails });
      })
      .catch(err => {
        dispatch({ type: SET_ACTIVE_PROJECT_FAILURE, payload: err.response });
      });
  };
};

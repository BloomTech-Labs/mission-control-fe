import axiosLabsGraphQL from "../utils/axiosLabsGraphQL";
import axios from "axios";

import { fullProjectDetailsById, peopleByProjectId } from "../queries";

export const SET_ACTIVE_PRODUCT = "SET_ACTIVE_PRODUCT";

export const SET_ACTIVE_PROJECT_START = "SET_ACTIVE_PROJECT";
export const SET_ACTIVE_PROJECT_SUCCESS = "SET_ACTIVE_PROJECT_SUCCESS";
export const SET_ACTIVE_PROJECT_FAILURE = "SET_ACTIVE_PROJECT_FAILURE";

export const setActiveProduct = el => {
  return dispatch => {
    dispatch({ type: SET_ACTIVE_PRODUCT, payload: el });
  };
};

export const setActiveProject = id => {
  return dispatch => {
    dispatch({ type: SET_ACTIVE_PROJECT_START });
    axios
      .all([
        axiosLabsGraphQL.post("", { query: fullProjectDetailsById(id) }),
        axiosLabsGraphQL.post("", { query: peopleByProjectId(id) })
      ])
      .then(
        axios.spread((res, res2) => {
          const project = {
            project: res.data.data.projects,
            people: res2.data.data.projectRoles
          }
          dispatch({ type: SET_ACTIVE_PROJECT_SUCCESS, payload: project });
        })
      )
      .catch(err => {
        dispatch({ type: SET_ACTIVE_PROJECT_FAILURE, payload: err.response });
      });
  };
};

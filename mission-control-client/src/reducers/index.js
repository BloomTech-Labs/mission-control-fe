import { combineReducers } from "redux";
import { activeProductStore } from "./activeProductStore";
import { activeProjectStore } from "./activeProjectStore";

export default combineReducers({
  activeProductStore,
  activeProjectStore
});

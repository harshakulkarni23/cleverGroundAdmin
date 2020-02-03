import { combineReducers } from "redux";
import auth from "./authReducer";
import institute from "./instituteReducer";

export default combineReducers({
  auth,
  institute
});

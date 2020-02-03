import {
  LOGIN,
  LOGOUT,
  LOADING_UI,
  SET_ERRORS,
  REMOVE_ERRORS
} from "../actions/authAction";

const initialState = {
  logindata: null,
  authenticated: false,
  loading: false,
  errors: null
};

export default function auth(state = initialState, action) {
  console.log("TCL: auth -> action", action);
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        logindata: action.payload,
        authenticated: true
      };
    case LOADING_UI:
      return {
        ...state,
        loading: true
      };
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };
    case REMOVE_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null
      };
    case LOGOUT:
      console.log("TCL: auth -> LOGOUT", LOGOUT);
      let updated = {
        ...state,
        ...initialState
      };
      console.log("TCL: auth -> updated", updated);
      return {
        ...state,
        ...initialState
      };

    default:
      return state;
  }
}

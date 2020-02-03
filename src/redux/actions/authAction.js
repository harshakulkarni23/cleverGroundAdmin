// import axios from "axios";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_ERRORS = "SET_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";
export const LOADING_UI = "LOADING_UI";

export const login = (apiData, history) => dispatch => {
  dispatch({ type: LOADING_UI });
  let data = {};
  if (apiData.email === "test@gmail.com" && apiData.password === "123456") {
    data = { msg: "success", email: apiData.email };
    dispatch({
      type: REMOVE_ERRORS
    });
    dispatch({
      type: LOGIN,
      payload: data
    });
    history.push("/app/landingPage");
  } else {
    dispatch({
      type: SET_ERRORS,
      payload: { message: "Wrong credentials! Please try again." }
    });
  }
};

export const logout = history => dispatch => {
  console.log("TCL: history", history);
  dispatch({
    type: LOGOUT,
    payload: null
  });
  // history.push("/");
};

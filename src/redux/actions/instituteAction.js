import axios from "axios";
import { BASE_URL } from "../../utils/config";
export const GET_INSTITUTE = "GET_INSTITUTE";
export const POST_INSTITUTE = "POST_INSTITUTE";
export const PUT_INSTITUTE = "PUT_INSTITUTE";
export const DELETE_INSTITUTE = "DELETE_INSTITUTE";
export const GET_PAGE_DETAILS = "GET_PAGE_DETAILS";

export function getInstitute(data) {
  let URL = `${BASE_URL}institute/`;
  return dispatch => {
    return axios
      .get(URL)
      .then(function(response) {
        dispatch({
          type: GET_INSTITUTE,
          payload: response
        });
      })
      .catch(function(error) {});
  };
}

export function addInstitute(data) {
  // console.log("data", data);
  let URL = `${BASE_URL}instituteInformation/`;
  let payload = data.payload;
  return dispatch => {
    return axios
      .post(URL, payload)
      .then(function(response) {
        dispatch({
          type: POST_INSTITUTE,
          payload: response
        });
      })
      .catch(function(error) {});
  };
}

export function putInstitute(data) {
  let URL = `${BASE_URL}`;
  let payload = data.payload;
  return dispatch => {
    return axios
      .post(URL, payload)
      .then(function(response) {
        dispatch({
          type: PUT_INSTITUTE,
          payload: response,
          usertype: response.data.user_type,
          token: response.data.token
        });
      })
      .catch(function(error) {});
  };
}

export function deleteInstitute(data) {
  let URL = `${BASE_URL}institute/`;
  let payload = data.payload;
  return dispatch => {
    return axios
      .post(URL, payload)
      .then(function(response) {
        dispatch({
          type: DELETE_INSTITUTE,
          payload: response,
          usertype: response.data.user_type,
          token: response.data.token
        });
      })
      .catch(function(error) {});
  };
}

export const getPageDetails = () => async dispatch => {
  let URL = `${BASE_URL}institute/1/branch/1/headerWithMenuDetails/`;
  axios
    .get(URL)
    .then(response => {
      if (response && response.data.status === 200) {
        console.log("TCL: response.data", response.data);
        dispatch({
          type: GET_PAGE_DETAILS,
          payload: response.data.response.length
            ? response.data.response[0]
            : {}
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};


// ,{
//   headers: {
//     'content-type': 'multipart/form-data'
//   }
// }
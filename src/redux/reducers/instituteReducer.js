import {
  GET_INSTITUTE,
  POST_INSTITUTE,
  GET_PAGE_DETAILS
} from "../actions/instituteAction";

const initialState = {
  institutes: [],
  addInstitutes: [],
  page_details: {}
};

export default function auth(state = initialState, action) {
  // console.log("InstituteAction===", action);
  switch (action.type) {
    case GET_INSTITUTE:
      return {
        ...state,
        institutes: action.payload
      };

    case POST_INSTITUTE:
      return {
        ...state,
        addInstitutes: action.payload
      };
    case GET_PAGE_DETAILS:
      return {
        ...state,
        page_details: action.payload
      };

    default:
      return state;
  }
}

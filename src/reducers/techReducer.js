import {
  GET_TECHS,
  DELETE_TECH,
  ADD_TECH,
  TECHS_ERROR,
  SET_LOADING,
} from "../actions/types";

const initialState = { techs: null, loading: false, error: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case GET_TECHS:
      return { ...state, techs: action.payload, loading: false };
    case DELETE_TECH:
      return { ...state };
    case ADD_TECH:
      return { ...state };
    case TECHS_ERROR:
      return { ...state };
    default:
      return { ...state };
  }
};

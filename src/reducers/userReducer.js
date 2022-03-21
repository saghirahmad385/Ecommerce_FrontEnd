import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_ERRORS,
} from '../constants/userConstants.js';
export const userDetails = (state = { user: {} }, action) => {
  if (action.type === LOGIN_REQUEST || action.type === REGISTER_REQUEST) {
    return {
      loading: true,
      isAuthenticated: false,
      user: {},
    };
  } else if (
    action.type === LOGIN_SUCCESS ||
    action.type === REGISTER_SUCCESS
  ) {
    return {
      ...state,
      loading: false,
      isAuthenticated: true,
      user: action.payload,
      token: action.payload.data.token,
    };
  } else if (action.type === LOGIN_FAIL || action.type === REGISTER_FAIL) {
    return {
      ...state,
      loading: false,
      isAuthenticated: false,
      error: action.payload,
      user: null,
    };
  } else if (action.type === CLEAR_ERRORS) {
    return {
      ...state,
      // error: null,
    };
  } else {
    return { ...state };
  }
};

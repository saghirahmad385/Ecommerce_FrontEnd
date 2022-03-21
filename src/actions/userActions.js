import axios from 'axios';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_ERRORS,
} from '../constants/userConstants.js';

export const login = (loginEmail, loginPassword) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    console.log('about to send login request');
    console.log(CLEAR_ERRORS);

    const config = { headers: { 'Content-Type': 'application/json' } };
    const email = loginEmail;
    const password = loginPassword;

    const body = { email: loginEmail, password: loginPassword };
    console.log(email, password);

    const optionsThatWillWork = {
      AxiosRequestConfig: {
        withCredentials: true,
      },
      data: {},
    };

    const user = await axios('api/v1/login', {
      method: 'post',
      data: body,
      withCredentials: true,
    });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: user,
    });
  } catch (error) {
    console.log('login fail action is about to dispatch');
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.error,
    });
    console.log('login fail action has been dispatched');
  }
};

export const register = (userForm) => async (dispatch) => {
  try {
    // const avatar = {
    //   public_id: 'this is public id',
    //   url: 'this is image sample url from react',
    // };
    dispatch({ type: REGISTER_REQUEST });
    console.log(userForm);
    console.log('registeration request sent');
    const user = await axios.post(
      'https://ecommerceapipublic-2.saghirahmad.repl.co/api/v1/register',
      userForm,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: user,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.error,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

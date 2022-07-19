import * as actions from "../actions/actionTypes";
import axios from "axios";
import { toast } from "react-toastify";


const options = {
    style: { 'font':'shabnam', 'textAlign': 'center','color':'#16001E', 'fontFamily':'firstFont', 'fontSize':'14px', 'fontWeight':'bold'}
}

export const signinAction = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: actions.USER_SIGNIN_REQUEST });
    try {
      const { data } = await axios.post("/api/users/signin", {
        email: email,
        password: password,
      });
      dispatch({ type: actions.USER_SIGNIN_SUCCESS, payload: data });
      toast.success('عزیز، خوش آمدی '+ data.name, options);
    } catch (err) {
      dispatch({
        type: actions.USER_SIGNIN_FAIL,
        payload: err.response.data.message,
      });
      toast.error(err.response.data.message, options);
    }
  };
};

export const signupAction = (name, email, password, confirmPassword) => {
  return async (dispatch) => {
    dispatch({ type: actions.USER_SIGNUP_REQUEST });
    try {
      const { data } = await axios.post("/api/users/signup", {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword
      });
      dispatch({ type: actions.USER_SIGNUP_SUCCESS, payload: data });
      dispatch({ type: actions.USER_SIGNIN_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: actions.USER_SIGNUP_FAIL,
        payload: error.response.data.message,
      });
      toast.error(error.response.data.message, options);
    }
  };
};

import * as actions from "../actions/actionTypes";
import axios from 'axios';



export const signinAction = (email, password) => {
    return async (dispatch) => {
        dispatch({type: actions.USER_SIGNIN_REQUEST});
         try{
            const {data} = await axios.post('/api/users/signin', { email: email, password: password });
            dispatch({ type:actions.USER_SIGNIN_SUCCESS, payload: data });
         }
         catch(err){
            dispatch({ type: actions.USER_SIGNIN_FAIL, payload:err.message });
         }

    };
};



export const signupAction = (name, email, password) => {
    return async (dispatch) => {
        dispatch({ type: actions.USER_SIGNUP_REQUEST });
        try {
            const {data} = await axios.post('/api/users/sigfnup', { name: name, email: email, password: password });
            dispatch({ type: actions.USER_SIGNUP_SUCCESS, payload: data });
            dispatch({ type: actions.USER_SIGNIN_SUCCESS, payload: data });
            dispatch({ type: actions.USER_SIGNUP_RESET });
        } catch (error) {
         const errorMsg = error.response.data.message ? error.response.data.message : error.message;
         dispatch({ type: actions.USER_SIGNUP_FAIL, payload: errorMsg });
        }
    }
}
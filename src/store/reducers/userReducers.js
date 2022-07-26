import * as actions from "../actions/actionTypes";

const userSigninReducerInState = localStorage.getItem('userInfo') ? { userInfo: JSON.parse(localStorage.getItem('userInfo'))} : {};

export const userSigninReducer = (state = userSigninReducerInState, action ) => {
    switch(action.type){
        case actions.USER_SIGNIN_REQUEST:
            return { ...state, loading: true };
        case actions.USER_SIGNIN_SUCCESS:
            const updatedState = { ...state, loading: false, userInfo: action.payload };
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
            return updatedState;
        case actions.USER_SIGNIN_FAIL:
            return { loading: false, error: action.payload };
        case actions.USER_SIGNOUT:
            localStorage.removeItem('userInfo');
            localStorage.removeItem('cardItems');
            return {};
        default:
            return state;
    }
}


const userSignupInState = {};

export const userSignupReducer = ( state = userSignupInState, action ) =>{
    switch(action.type){
        case actions.USER_SIGNUP_REQUEST:
            return { ...state, loading: true };
        case actions.USER_SIGNUP_SUCCESS:
            const updatedSate = { ...state, loading: false, userInfo : action.payload };
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
            return updatedSate;
        // case actions.USER_SIGNUP_RESET:
        //     return {};
        case actions.USER_SIGNUP_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;

    }
}
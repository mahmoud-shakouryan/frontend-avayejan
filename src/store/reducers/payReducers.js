import * as actions from '../actions/actionTypes';


const payReducerInState = { payment: '', error: false, loading: false };

export const payReducer = (state= payReducerInState, action ) =>{
    switch (action.type){
        case actions.PAY_REQUEST:
            return {...state, loading:true };
        case actions.PAY_SUCCESS:
            return { ...state, loading: false, payment: action.payload };
        case actions.PAY_FAIL:
            return { ...state, loading:false, error: action.payload };
        default: 
            return state;
    }
};


const paymentStatusInitialState = { loading: true, error: null };

export const paymentStatusReducer = (state = paymentStatusInitialState, action) => {
    switch(action.type){
        case actions.GET_PAYMENT_STATUS_REQUEST:
            return { ...state, loading: true, error: false };
        case actions.GET_PAYMENT_STATUS_SUCCESS:
            return { ...state, loading: false, error: false };
        case actions.GET_PAYMENT_STATUS_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
         return state;
    }
};

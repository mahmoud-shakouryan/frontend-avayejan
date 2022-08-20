import * as actions from "../actions/actionTypes";
import axios from 'axios';
import { toast } from 'react-toastify';



export const pay = (price, videoId) =>{
    return async (dispatch, getState) =>{
        dispatch({type: actions.PAY_REQUEST});
        const store = getState();
        const userInfo = store.userSigninReducer.userInfo;
        try{
            const result = await axios.post('/api/pay', { price: price, videoId: videoId, userId: userInfo._id }, {headers: {Authorization: `Bearer ${userInfo.token}`}});
            dispatch({ type: actions.PAY_SUCCESS, payload: result.data.link });
        }
        catch(err){
            console.log('pay error>>>', err);
            dispatch({ type: actions.PAY_FAIL, payload: err.message });

        }
    }
};

export const getPaymentStatusAction = (user, status, order_id, payId) => {
    return async dispatch =>{
        dispatch({ type: actions.GET_PAYMENT_STATUS_REQUEST});
        try{
            const {data} = await axios.post('http://localhost:5000/api/pay/status', { userId: user, status: status, order_id: order_id, payId: payId});
            dispatch({ type: actions.GET_PAYMENT_STATUS_SUCCESS, payload: data });    //data un araye az id'ha
        }
        catch(err){
            console.log('dlListAction axios error >>>', err);
            dispatch({ type: actions.GET_PAYMENT_STATUS_FAIL, payload: err.message })
        }
    }
};
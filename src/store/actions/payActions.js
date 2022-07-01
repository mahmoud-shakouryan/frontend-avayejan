import * as actions from "../actions/actionTypes";
import axios from 'axios';
import { toast } from 'react-toastify';



export const pay = (price, videoId) =>{
    return async (dispatch, getState) =>{
        dispatch({type: actions.PAY_REQUEST});
        const store = getState();
        const userInfo = store.userSigninReducer.userInfo;
        try{
            const result = await axios.post('/api/pay', { price: price, videoId: videoId }, { headers: { Authorization: `Bearer ${userInfo.token}`}});
            dispatch({ type: actions.PAY_SUCCESS, payload: result.data.authority });
        }
        catch(err){
            console.log('pay error>>>', err);
            dispatch({ type: actions.PAY_FAIL, payload:err.message });

        }
    }
}
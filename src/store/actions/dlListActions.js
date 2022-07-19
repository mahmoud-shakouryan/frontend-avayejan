import axios from 'axios';
import * as actions from './actionTypes';
import { removeFromCard } from './cardActions';


export const dlListAction = (user, status, order_id, payId) => {
    return async dispatch =>{
        dispatch({ type: actions.DLLIST_REQUEST });
        try{
            const {data} = await axios.post('http://localhost:5000/api/videos/dllist', { userId: user, status: status, order_id: order_id, payId: payId});
            dispatch({ type: actions.DLLIST_SUCCESS, payload: data });    //data un araye az id'ha
        }
        catch(err){
            console.log('dlListAction axios error >>>', err);
            dispatch({ type: actions.DLLIST_FAIL, payload: err.message })
        }
    }
};


export const linksAction = (allFiles) =>{
   // console.log('links action allFiles', allFiles)
    return async dispatch => {
        dispatch({ type: actions.LINK_REQUEST });
        try{
            const { data } = await axios.post('http://localhost:5000/api/videos/listtoget', { allFiles: allFiles });
            console.log('links action', data)
            dispatch({ type: actions.LINK_SUCCESS , payload: data });
        }
        catch(err){
            console.log('linksAction axios error >>>', err);
            dispatch({ type: actions.LINK_FAIL, payload: err.message });
        }
    }
}
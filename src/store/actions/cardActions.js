import * as actions from './actionTypes';
import axios from 'axios';


export const addToCard = (videoId) => {
    return async (dispatch) => {
        try {
            const result = await axios.get(`/api/videos/${videoId}`);
            const video = result.data;
            dispatch({ type: actions.ADD_TO_CARD, payload: video});
        } catch (err) {
            console.log('cardActions addToCard error: ', err);
        }
    }
}


export const removeFromCard = (videoId) => {
    return (dispatch) =>{
        dispatch({ type: actions.REMOVE_FROM_CARD, payload: videoId });
    }
}
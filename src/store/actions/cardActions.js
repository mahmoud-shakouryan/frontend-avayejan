import * as actions from './actionTypes';
import axios from 'axios';


export const addToCard = ( videoId, videoPrice ) => {
    return async (dispatch) => {
        try {
            const result = await axios.get(`/api/videos/${videoId}`);
            const video = result.data;
            dispatch({ type: actions.CART_ADD_VIDEO, payload: { videoName: video.videoName, videoPrice: videoPrice }});

        } catch (err) {
            console.log('err', err);
        }
    }
}
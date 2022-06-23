import * as actions from './actionTypes';
import axios from 'axios';


export const addToCard = (videoId) => {
    return async (dispatch) => {
        try {
            const result = await axios.get(`/api/videos/${videoId}`);
            const video = result.data;
            dispatch({ type: actions.ADD_TO_CARD, payload: { videoId: video._id, videoName: video.videoName, videoPrice: videoPrice }});
        } catch (err) {
            console.log('cardActions addToCard error: ', err);
        }
    }
}
import axios from "axios";
import * as actions from "./actionTypes";
import { vidsArr } from "../../utils/data.js";

export const videoList = (page) => {
  return (dispatch) => {
    dispatch({ type: actions.VIDEO_LIST_REQUEST });
    try {
      const vidsToSkip = page === 0 ? 0 : (page - 1) * 4;
      const thisPageVids = vidsArr.slice(vidsToSkip, vidsToSkip + 4);
      dispatch({ type: actions.VIDEO_LIST_SUCCESS, payload: { videos: vidsArr, thisPageVids: thisPageVids }});
    } catch (err) {
      console.log("videoAcions videoList error", err.message);
      dispatch({ type: actions.VIDEO_LIST_FAIL, payload: err.message });
    }
  };
};

export const videoDetails = (id) => {
  return (dispatch) => {
    try {
      dispatch({ type: actions.VIDEO_DETAILS_REQUEST });
      const video = vidsArr.find((video) => video.id == id);
      if (!video) {
        return dispatch({ntype: actions.VIDEO_DETAILS_FAIL, payload: "ویدیو یافت نشد"})
      }
      dispatch({ type: actions.VIDEO_DETAILS_SUCCESS, payload: video });
    } catch (err) {
      console.log("videoAcions videoDetails error", err.message) 
      dispatch({ type: actions.VIDEO_DETAILS_FAIL, payload: err.message })}
  };
};


export const myVidsAction = (status, userId, payId, order_id) => {
  return async dispatch =>{
        dispatch({ type: actions.MY_VIDS_REQUEST});
        try{
          const { data } = await axios.post('http://localhost:5000/api/videos/uservids', {userId, payId, order_id, status});
          dispatch({ type: actions.MY_VIDS_SUCCESS, payload: data })
        }
        catch(err){
          dispatch({ type: actions.MY_VIDS_FAIL, payload: err.message });
        }
  }
}


export const myVidsLinksAction = (allFiles) =>{
   return async dispatch => {
       dispatch({ type: actions.LINK_REQUEST });
       try{
           const { data } = await axios.post('http://localhost:5000/api/videos/myvidslinks', { allFiles: allFiles });
           console.log('links action', data)
           dispatch({ type: actions.LINK_SUCCESS , payload: data });
       }
       catch(err){
           console.log('linksAction axios error >>>', err);
           dispatch({ type: actions.LINK_FAIL, payload: err.message });
       }
   }
};

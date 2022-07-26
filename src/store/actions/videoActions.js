import axios from "axios";
import * as actions from "./actionTypes";
import { vidsArr } from "../../utils/data.js";

export const videoList = (page) => {
  return (dispatch) => {
    dispatch({ type: actions.VIDEO_LIST_REQUEST });
    try {
      // const {data} = await axios.get(`/api/videos?page=${page}`);
      const vidsToSkip = (page - 1) * 4;
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
      // axios.get(`/api/videos/${id}`).then(result=>{
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

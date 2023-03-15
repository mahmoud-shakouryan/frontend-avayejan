import * as actions from "../actions/actionTypes";
import { vidsArr } from "../../utils/data";

const videoListInState =
  localStorage.getItem("videos") && localStorage.getItem("videoList")
    ? {
        videos: JSON.parse(localStorage.getItem("videos")),
        curPageVids: JSON.parse(localStorage.getItem("videoList")),
        loading: true,
      }
    : { videos: vidsArr, curPageVids: [], loading: true };
export const videoListReducer = (state = videoListInState, action) => {
  switch (action.type) {
    case actions.VIDEO_LIST_REQUEST:
      return { ...state, loading: true };
    case actions.VIDEO_LIST_SUCCESS:
      localStorage.setItem(
        "videoList",
        JSON.stringify(action.payload.thisPageVids)
      );
      localStorage.setItem("videos", JSON.stringify(action.payload.videos));
      return {
        ...state,
        loading: false,
        videos: action.payload.videos,
        curPageVids: action.payload.thisPageVids,
      };
    case actions.VIDEO_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const videoDetailsInitialState = { video: {}, loading: false, error: null };
export const videoDetailsReducer = (
  state = videoDetailsInitialState,
  action
) => {
  switch (action.type) {
    case actions.VIDEO_DETAILS_REQUEST:
      return { ...state, loading: true };
    case actions.VIDEO_DETAILS_SUCCESS:
      return { ...state, loading: false, video: action.payload };
    case actions.VIDEO_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const myVidsInitialState = { myVidsArr: [], loading: false, error: false };
export const myVidsReducer = (state = myVidsInitialState, action) => {
  switch (action.type) {
    case actions.MY_VIDS_REQUEST:
      return { ...state, loading: true, error: false };
    case actions.MY_VIDS_SUCCESS:
      const updatedState = {
        ...state,
        myVidsArr: action.payload,
        loading: false,
        error: false,
      };
      return updatedState;
    case actions.MY_VIDS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const myVidsLinksInitialState = { loading: false, error: false, links: [] };
export const myVidsLinksReducer = (state = myVidsLinksInitialState, action) => {
  switch (action.type) {
    case actions.LINK_REQUEST:
      return { ...state, loading: true, error: false };
    case actions.LINK_SUCCESS:
      const updatedState = {
        ...state,
        links: action.payload,
        loading: false,
        error: false,
      };
      return updatedState;
    case actions.LINK_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

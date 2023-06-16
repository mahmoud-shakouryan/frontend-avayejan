import * as actions from "./actionTypes";
import { vidsArr } from "../../utils/data";
import { toast } from "react-toastify";



export const addToCard = (videoId) => {
  return (dispatch) => {
    try {
      const video = vidsArr.find((video) => video.id == videoId);
      dispatch({ type: actions.ADD_TO_CARD, payload: video });
    } catch (err) {
      console.log("cardActions addToCard error: ", err);
    }
  };
};

export const removeFromCard = (videoId) => {
  return (dispatch) => {
    dispatch({ type: actions.REMOVE_FROM_CARD, payload: videoId });
    localStorage.removeItem('cardItems');
  };
};

export const cardEmpty = () => {
  return (dispatch) => {
    dispatch({ type: actions.CART_EMPTY });
  };
};

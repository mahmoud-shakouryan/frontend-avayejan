import axios from "axios";
import * as actions from "./actionTypes";

export const allUsersAction = (timeRange, buyRange) => {
  console.log(timeRange, buyRange)
  return async (dispatch) => {
    dispatch({ type: actions.All_USERS_REQUEST });
    try {
      const { data } = await axios.get(`/api/admin/users/${timeRange}`);
      dispatch({ type: actions.All_USERS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: actions.All_USERS_FAIL, payload: error });
    }
  };
};

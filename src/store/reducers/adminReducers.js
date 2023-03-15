import * as actions from "../actions/actionTypes";

const allUsersInState = { allUsers: [], loading: false, error: null };
export const allUsersReducer = (state = allUsersInState, action) => {
  switch (action.type) {
    case actions.All_USERS_REQUEST:
      return { ...state, loading: true };
    case actions.All_USERS_SUCCESS:
      const updatedState = {
        ...state,
        loading: false,
        allUsers: action.payload,
      };
      return updatedState;
    case actions.All_USERS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

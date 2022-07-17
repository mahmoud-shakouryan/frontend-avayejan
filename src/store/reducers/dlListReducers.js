import * as actions from "../actions/actionTypes";


// const dlListInState = { videoIdsArr: [], loading: true, error: false };
const dlListInState = localStorage.getItem('userInfo') ? { videoIdsArr:  JSON.parse(localStorage.getItem('userInfo')).paidVidIds, loading: true, error: null } : { videoIdsArr: [], loading: true, error: false };

export const dlListReducer = (state = dlListInState, action) => {
    switch(action.type){
        case actions.DLLIST_REQUEST:
            return { ...state, loading: true, error: false };
        case actions.DLLIST_SUCCESS:
            return { ...state, videoIdsArr: action.payload, loading: false, error: false };
        case actions.DLLIST_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
         return state;
    }
};



const linksReducerInState = { link: null, loading: false, error: false };
export const linksReducer = (state = linksReducerInState, action ) =>{
    switch(action.type){
        case actions.LINK_REQUEST:
            return { ...state, loading: true , error: false };
        case actions.LINK_SUCCESS:
            return { ...state, link: action.payload, loading: false, error: false };
        case actions.LINK_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}
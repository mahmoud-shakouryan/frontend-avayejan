import * as actions from '../actions/actionTypes';


const videoListInState = localStorage.getItem('videoList') ? { videos: JSON.parse(localStorage.getItem('videoList')), loading: true } : { videos: [], loading: true};

export const videoListReducer = (state = videoListInState, action) => {
 switch (action.type){
    case actions.VIDEO_LIST_REQUEST:
        return {...state, loading:true };
    case actions.VIDEO_LIST_SUCCESS:
               localStorage.setItem('videoList', JSON.stringify(action.payload));
        return { ...state, loading: false, videos: action.payload };
    case actions.VIDEO_LIST_FAIL:
        return { ...state, loading:false, error: action.payload };
    default: 
        return state;
 }
};



const videoDetailsInState = { video: {}, loading: false, error: null };

export const videoDetailsReducer = (state = videoDetailsInState, action) =>{
    switch (action.type){
        case actions.VIDEO_DETAILS_REQUEST:
            return { ...state, loading: true };
        case actions.VIDEO_DETAILS_SUCCESS:
            return { ...state, loading: false, video: action.payload };
        case actions.VIDEO_DETAILS_FAIL:
            console.log(action.payload)
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

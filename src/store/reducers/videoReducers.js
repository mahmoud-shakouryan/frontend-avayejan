import * as actions from '../actions/actionTypes';


const videoListInState = localStorage.getItem('videos') && localStorage.getItem('videoList') ? { videos: JSON.parse(localStorage.getItem('videos')), curPageVids:JSON.parse(localStorage.getItem('videoList')) ,loading: true } : { videos: [], curPageVids:[], loading: true};

export const videoListReducer = (state = videoListInState, action) => {
 switch (action.type){
    case actions.VIDEO_LIST_REQUEST:
        return {...state, loading:true };
    case actions.VIDEO_LIST_SUCCESS:
               localStorage.setItem('videoList', JSON.stringify(action.payload.thisPageVids));
               localStorage.setItem('videos', JSON.stringify(action.payload.videos));
        return { ...state, loading: false, videos: action.payload.videos, curPageVids: action.payload.thisPageVids };
    case actions.VIDEO_LIST_FAIL:
        return { ...state, loading:false, error: action.payload };
    default: 
        return state;
 }
};



const videoDetailsInitialState = { video: {}, loading: false, error: null };

export const videoDetailsReducer = (state = videoDetailsInitialState, action) =>{
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
};


const myVidsLinksInitialState = { links: [], loading: false, error: false };
export const myVidsLinksReducer = (state = myVidsLinksInitialState, action ) =>{
    switch(action.type){
        case actions.LINK_REQUEST:
            return { ...state, loading: true , error: false };
        case actions.LINK_SUCCESS:
            // console.log([...state.links].includes(action.payload))
            const updatedState = { ...state, links: action.payload, loading: false, error: false };
            return updatedState
        case actions.LINK_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

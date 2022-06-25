import * as actions from '../actions/actionTypes';

const cardReducerInState =  { cardItems: localStorage.getItem('cardItems') ? JSON.parse(localStorage.getItem('cardItems')).cartItems : [] };

export const cardReducer = (state = cardReducerInState, action ) => {

    switch(action.type){
        case actions.ADD_TO_CARD:
            // const item = action.
            const existItem = state.cardItems.find( cardItem => cardItem.videoId === item.videoId );    //un objecti az video'haye tuye cart ke alan tu cartemoon dashtim.
            if(existItem){
                const updatedState = { ...state, cardItems: state.cardItems.map()}
            }
    }
    
}
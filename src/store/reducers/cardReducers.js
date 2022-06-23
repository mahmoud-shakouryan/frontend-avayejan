import * as actions from '../actions/actionTypes';

const cardReducerInState =  localStorage.getItem('cardItems') ? JSON.parse(localStorage.getItem('cartItems')).cartItems : [];

export const cardReducer = (state = cardReducerInState, action ) => {

    switch(action.type){
        case actions.ADD_TO_CARD:
            
    }
    
}
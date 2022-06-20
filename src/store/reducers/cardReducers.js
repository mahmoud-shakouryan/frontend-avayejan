import * as actions from '../actions/actionTypes';

const cardReducerInState = { cardItems: localStorage.getItem('cardItems') ? JSON.parse(localStorage.getItem('cartItems')).cartItems : [] };

export const cardReducer = (state = cardReducerInState, action ) => {
    
}
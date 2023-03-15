import { toast } from "react-toastify";
import * as actions from "../actions/actionTypes";
import { toastStyle as options } from "../../utils/styles";

const cardReducerInState = {
  cardItems: localStorage.getItem("cardItems")
    ? JSON.parse(localStorage.getItem("cardItems")).cardItems
    : [],
};

export const cardReducer = (state = cardReducerInState, action) => {
  switch (action.type) {
    case actions.ADD_TO_CARD:
      const item = action.payload;
      const existItem = state.cardItems.find(
        (cardItem) => cardItem.id === item.id
      );
      if (existItem) {
        const updatedState = {
          ...state,
          cardItems: state.cardItems.map((prevCardItem) =>
            prevCardItem.id === item.id ? item : prevCardItem
          ),
        };
        localStorage.setItem("cardItems", JSON.stringify(updatedState));
        return updatedState;
      } else {
        //// moghe'ee ke ye video kamelan jadid ro add to cart mikonim
        const updatedState = {
          ...state,
          cardItems: [...state.cardItems, item],
        };
        localStorage.setItem("cardItems", JSON.stringify(updatedState));
        return updatedState;
      }
    case actions.REMOVE_FROM_CARD:
      const updatedFilteredState = {
        ...state,
        cardItems: state.cardItems.filter(
          (cardItem) => cardItem.id !== +action.payload
        ),
      };
      updatedFilteredState.cardItems.length > 0
        ? localStorage.setItem(
            "cardItems",
            JSON.stringify(updatedFilteredState)
          )
        : localStorage.removeItem("cardItems");
      if (updatedFilteredState.cardItems.length === 0) {
        toast.info(" سبد خرید خالی شد", options);
      }
      return updatedFilteredState;
    case actions.CART_EMPTY:
      localStorage.removeItem("cardItems");
      return { ...state, cardItems: [] };
    default:
      return state;
  }
};

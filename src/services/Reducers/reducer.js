import { ADD_TO_CART } from "../Constants";

const initalSate = {
  cardData: [],
};

export default function cardItem(initalSate, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        data: data,
      };
      break;
    default:
      return state;
  }
}

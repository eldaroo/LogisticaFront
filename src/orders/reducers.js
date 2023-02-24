import { CREATE_ORDER, REMOVE_ORDER } from "./actions";

export const orders = (state = [], action ) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_ORDER: {
      const { text } = payload;
      const newOrder = {
        text,
      };
      return state.concat(newOrder);
    }
    case REMOVE_ORDER: {
      const { text } = payload;
      return state.filter((order) => order.text !== text);
    }

    default:
      return state;
  }
};

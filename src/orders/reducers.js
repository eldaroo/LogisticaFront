import { CREATE_ORDER, REMOVE_ORDER, LOAD_ORDERS_FAILURE, LOAD_ORDERS_IN_PROGRESS, LOAD_ORDERS_SUCCESS} from "./actions";

export const isLoading = (state = false, action) => {
  const { type } = action;

  switch (type) {
  case LOAD_ORDERS_IN_PROGRESS:
      return true;
  case LOAD_ORDERS_SUCCESS:
  case LOAD_ORDERS_FAILURE:
      return false;
  default:
      return state;
  }
}

export const orders = (state = [], action ) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_ORDER: {
      const { order } = payload;
      return state.concat(order);
    }
    case REMOVE_ORDER: {
      const { text } = payload;
      return state.filter((order) => order.text !== text);
    }
    case LOAD_ORDERS_SUCCESS: {

      const { orders } = payload;
      return orders;
  }
    case LOAD_ORDERS_IN_PROGRESS:
    case LOAD_ORDERS_FAILURE:
    default:
      return state;
  }
};

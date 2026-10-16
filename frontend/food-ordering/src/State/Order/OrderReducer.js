import {
  GET_USERS_ORDERS_FAILURE,
  GET_USERS_ORDERS_REQUEST,
  GET_USERS_ORDERS_SUCCESS,
} from "./OrderActionTypes";

const intitalState = {
  loading: false,
  orders: [],
  error: null,
  notifications: [],
};

export const orderReducer = (state = intitalState, { type, payload }) => {
  switch (type) {
    case GET_USERS_ORDERS_REQUEST:
      return { ...state, error: null, loading: true };
    case GET_USERS_ORDERS_SUCCESS:
      return { ...state, error: null, loading: false, orders: payload };
    case GET_USERS_ORDERS_FAILURE:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};

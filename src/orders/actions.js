export const CREATE_ORDER = 'CREATE_ORDER';
export const createOrder = order => ({
    type: CREATE_ORDER,
    payload: {order}
});
export const REMOVE_ORDER = 'REMOVE_ORDER';
export const removeOrder = order => ({
    type: REMOVE_ORDER,
    payload: {order}
});

export const LOAD_ORDERS_IN_PROGRESS = 'LOAD_ORDERS_IN_PROGRESS';
export const loadOrdersInProgress = () => ({
    type: LOAD_ORDERS_IN_PROGRESS,
});

export const LOAD_ORDERS_SUCCESS = 'LOAD_ORDERS_SUCCESS';
export const loadOrdersSuccess = orders => ({
    type: LOAD_ORDERS_SUCCESS,
    payload: { orders },
});

export const LOAD_ORDERS_FAILURE = 'LOAD_ORDERS_FAILURE';
export const loadOrdersFailure = () => ({
    type: LOAD_ORDERS_FAILURE,
});
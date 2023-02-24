export const CREATE_ORDER = 'CREATE_ORDER';
export const createOrder = text => ({
    type: CREATE_ORDER,
    payload: {text}
});
export const REMOVE_ORDER = 'REMOVE_ORDER';
export const removeOrder = text => ({
    type: REMOVE_ORDER,
    payload: {text}
});

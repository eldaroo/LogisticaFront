import {loadOrdersFailure, loadOrdersSuccess, loadOrdersInProgress, createOrder} from "./actions";

export const loadOrders = () => async (dispatch, getState) => {
    try {
        dispatch(loadOrdersInProgress);
        const response = await fetch('http://localhost:8080/order');
        const orders = await response.json();
        dispatch(loadOrdersSuccess(orders))
    } catch (e) {
        dispatch(loadOrdersFailure);
        dispatch(displayAlert(e));
    }
}

export const saveOrder = text => async (dispatch, getState) => {
    try {
        const body = JSON.stringify({text});
        console.log(body);
        const response = await fetch('http://localhost:8080/order/save', {
            headers: {
                'Content-Type': 'application/json',
            },   
            method: 'post',
            body
        });
        const newOrder = await response.json();
        dispatch(createOrder(newOrder));
    } catch (e) {
        dispatch(displayAlert(e));

    }
}

export const displayAlert = text => () => {
    alert(text);
};
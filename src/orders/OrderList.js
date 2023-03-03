import React, { useEffect } from "react";
import OrderItem from "./OrderItem";
import { connect } from 'react-redux';
import './OrderList.css';
import { removeOrder } from "./actions";
import { loadOrders } from "./thunks";

const OrderList = ({orders = [], onRemovePressed, isLoading, startLoadingOrders}) => {
    useEffect(() => {
        startLoadingOrders();
    }, []);

    const loadingMessage = <div>Loading Orders...</div>
    const content = (<div >
        {orders.map( order => <OrderItem key={order.id} order = {order} onRemovePressed = {onRemovePressed} />)}
    </div>);

    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    orders: state.orders,
    isLoading: state.isLoading
})

const mapDispatchToProps = dispatch => ({
    onRemovePressed: order => dispatch(removeOrder(order)),
    startLoadingOrders: () => dispatch(loadOrders())
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
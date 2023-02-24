import React from "react";
import OrderItem from "./OrderItem";
import { connect } from 'react-redux';
import './OrderList.css';
import { removeOrder } from "./actions";

const OrderList = ({orders = [], onRemovePressed}) => (
    <div >
        {orders.map( order => <OrderItem order = {order} onRemovePressed = {onRemovePressed} />)}
    </div>
);

const mapStateToProps = state => ({
    orders: state.orders
})

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeOrder(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
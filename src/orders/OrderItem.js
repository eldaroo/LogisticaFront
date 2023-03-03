import React from "react";
import './OrderItem.css';


const OrderItem = ({order, onRemovePressed}) => (
    <div className="order-item-container">
        <h2>{ order.text }</h2>
        <div className="buttons-container">
            <button className="completed-button">Mark As Completed</button>
            <button 
                className="remove-button" 
                onClick={() => onRemovePressed(order)}
                >Remove</button>
        </div>
    </div>
)

export default OrderItem;
import React from "react";
import { useState } from "react";
import './NewOrderForm.css';
import { connect } from "react-redux";
import { saveOrder } from "./thunks";

const NewOrderForm = ({orders, onCreatePressed}) => {
    const [inputValue, setInputValue] = useState('');
    return (
    <div className="new-order-form">
        <input 
            className="new-order-input"
            type="text"
            placeholder="Type your new order here"
            value={inputValue}
            onChange= {e => setInputValue(e.target.value)}
        ></input>
        <button 
            className="new-order-button"
            onClick={() => {
                if (inputValue !== '') {
                    onCreatePressed(inputValue);
                    setInputValue('');
                }
            }}
        >Crear order</button>
    </div>
    );
    
};

const mapStateToProps = state => ({
    orders: state.orders,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(saveOrder(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewOrderForm);
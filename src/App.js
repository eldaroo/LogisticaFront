import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import OrderList from './orders/OrderList';
import NewOrderForm from './orders/NewOrderForm';

const App = () => (
    <div className="App list-wrapper">
        <NewOrderForm />
        <OrderList />
    </div>
);

export default hot(module)(App);
import { createStore, combineReducers } from 'redux';
import { orders } from './orders/reducers';

const reducers = {
    orders,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
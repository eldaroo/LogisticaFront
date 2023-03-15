import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { LogInPage } from './pages/LoginPage';

const App = () => (
    <div className="App list-wrapper">
        <Navbar />
        <div className='container'>
            <Routes>
                <Route path='/' element = { <Home />}></Route>
                <Route path='/login' element = { <LogInPage />}></Route>
            </Routes>
        </div>
    </div>
);

export default hot(module)(App);
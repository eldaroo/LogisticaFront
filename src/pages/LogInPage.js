import { useState } from "react";
import { useHistory } from 'react-router-dom';
import '../Navbar.css';


export const LogInPage = () => {
    return (
        <div className="content-container">
            <h1>Log In</h1>
            <input
                placeholder = "someone@gmail.com" />
            <input
                type = "password"
                placeholder = "password" />
            <button>Log In</button>
            <button>Forgot your password?</button>
            <button>Don't have an account? Sign Up</button>
        </div>
    )
}
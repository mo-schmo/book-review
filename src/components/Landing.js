import React from 'react';
import { Login } from './Login';

export const Landing = props => {
    return (
        <div className="Landing">
            Landing Page
            <Login {...props}/>
        </div>
    )
}
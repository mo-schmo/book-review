import React from 'react';
import auth from '../js/auth';

export const Login = ({history}) => {
    return (
        <div className="Login">
            Login Page
            <button onClick={() => {
                auth.login(() => {
                    history.push("/main");
                });
            }}>Login</button>
        </div>
    )
}
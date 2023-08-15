import React, { useState } from 'react';
import axios from 'axios';

const AuthPage = (props) => {
    const [passwordVisible, setPasswordVisible] = useState(false); // State to track password visibility

    const onSubmit = (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const username = e.target[1].value;
        const secret = e.target[2].value;
        axios
            .post("http://localhost:3001/authenticate", { username, secret, name })
            .then((r) => props.onAuth({ ...r.data, secret }))
            .catch((e) => console.log("Auth Error", e));
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">Welcome to ChatOn📫</div>

                <div className="form-subtitle">Enter Your Details to Get Started</div>

                <div className="auth">
                    <input className="auth-input" name="name" placeholder="Enter your name" />
                    <input className="auth-input" name="username" placeholder="Enter your email" />
                    <div style={{ position: 'relative' }}>
                        <input
                            className="auth-input"
                            name="secret"
                            placeholder="Enter your password"
                            type={passwordVisible ? 'text' : 'password'}
                        />
                        {/*<button type="button" onClick={togglePasswordVisibility}>*/}
                        {/*    {passwordVisible ? 'Hide Password' : 'Show Password'}*/}
                        {/*</button>*/}
                    </div>
                    <button className="auth-button" type="submit">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AuthPage;

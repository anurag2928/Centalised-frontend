import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Success = ({ setToken }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');

        if (token) {
            // Save token to sessionStorage and update state
            sessionStorage.setItem('token', JSON.stringify(token));
            setToken(token); // Update token in the app's state
        } else {
            alert('Payment successful, but session token is missing!');
            navigate('/'); // Redirect to the homepage if no token
        }
    }, [setToken, navigate]);

    return (
        <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
            <div className="text-center">
                <h1 className="text-success">Payment Successful!</h1>
                <p>Thank you for your purchase. Your payment has been processed successfully.</p>
            </div>
        </div>
    );
};

export default Success;

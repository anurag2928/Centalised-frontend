import React from 'react';
import { useNavigate } from 'react-router-dom';

const CancelPage = () => {
    const navigate = useNavigate();

    const handleRetry = () => {
        navigate('/payment'); // Navigate back to the homepage or payment page
    };

    return (
        <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
            <div className="text-center p-4">
                <h1 className="text-danger">Payment Canceled</h1>
                <p>Your payment was canceled. You can retry the payment or return to the homepage.</p>
                <div className="mt-4">
                    <button className="btn btn-primary me-3" onClick={handleRetry}>
                        Retry Payment
                    </button>
                    <button className="btn btn-secondary" onClick={() => navigate('/')}>
                        Go to Homepage
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CancelPage;

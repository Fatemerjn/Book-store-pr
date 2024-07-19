import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FailedPayment.css';

const FailedPayment = () => {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate('/shipping');
  };

  return (
    <div className="failed-payment-page">
      <div className="failed-payment-container">
        <div className="error-icon">✖</div>
        <h2>خطا در پرداخت</h2>
        <p>لطفا جهت ثبت سفارش مجدد سعی کنید</p>
        <button onClick={handleRetry} className="retry-button">پرداخت مجدد</button>
      </div>
    </div>
  );
};

export default FailedPayment;

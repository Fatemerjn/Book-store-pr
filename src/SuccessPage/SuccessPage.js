import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SuccessPage.css';

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="success-page">
      <div className="success-container">
        <div className="success-icon">✔</div>
        <h2>پرداخت شما با موفقیت انجام شد.</h2>
        <button onClick={handleBackToHome} className="back-button">برگشت به صفحه‌ی اصلی</button>
      </div>
    </div>
  );
};

export default SuccessPage;

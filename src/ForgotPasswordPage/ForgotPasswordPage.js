import React, { useState } from 'react';
import './ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const handleResetPassword = (e) => {
    e.preventDefault();
  };

  return (
    <div className="forgot-password-page">
      <h2>بازیابی رمز عبور</h2>
      <form className="forgot-password-form" onSubmit={handleResetPassword}>
        <label>
          <span>شماره همراه</span>
          <input
            type="text"
            placeholder="09********"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label>
          <span>رمز عبور</span>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="password-hint">رمز عبور باید حداقل 8 کاراکتر و متشکل از حروف و اعداد باشد.</div>
        </label>
        <label>
          <span>تکرار رمز عبور</span>
          <input
            type="password"
            placeholder="********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <label>
          <span>کد تایید</span>
          <div className="input-with-button">
            <input
              type="text"
              placeholder="کد تایید"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <button type="button" className="send-code-button">ارسال کد</button>
          </div>
        </label>
        <div className="button-container">
          <button type="submit">بازنشانی رمز عبور</button>
          <button type="button" className="back-button">بازگشت</button>
        </div>
      </form>
      <div className="login-link">
        قبلا ثبت‌نام کرده اید؟ <a href="/login">از اینجا وارد کنید</a>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

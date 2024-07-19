import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup-page">
      <h2>ثبت نام در کتاب خورشید</h2>
      <form className="signup-form" onSubmit={handleSignup}>
        <label>
          <span>نام</span>
          <input
            type="text"
            placeholder="نام"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <span>نام خانوادگی</span>
          <input
            type="text"
            placeholder="نام خانوادگی"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </label>
        <label>
          <span>رمز عبور</span>
          <input
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="password-hint">رمز عبور باید حداقل 8 کاراکتر و متشکل از حروف و اعداد باشد.</div>
        </label>
        <label>
          <span>شماره همراه</span>
          <input
            type="text"
            placeholder="09********"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <div className="button-container">
          <button type="submit">ثبت نام</button>
          <Link to="/login">
            <button type="button" className="back-button">بازگشت</button>
          </Link>
        </div>
      </form>
      <div className="login-link">
        قبلا ثبت‌نام کرده اید؟ <Link to="/login">از اینجا وارد کنید</Link>
      </div>
    </div>
  );
};

export default SignupPage;

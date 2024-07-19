import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'adminpassword') {
      setErrorMessage('');
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('role', 'admin');
      navigate('/admin');
    } else if (username !== 'user' || password !== 'password') {
      setErrorMessage('نام کاربری یا رمز عبور نادرست است!');
    } else {
      setErrorMessage('');
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('role', 'user');
      navigate('/user-profile');
    }
  };

  return (
    <div className="login-page">
      <h2>ورود به کتاب خورشید</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="input-container">
          <label>
            <span>نام کاربری</span>
            <input
              type="text"
              placeholder="09********"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          </label>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="button-container">
          <button type="submit">ورود</button>
          <Link to="/forgot-password">
            <button type="button" className="forgot-password">فراموشی رمز عبور</button>
          </Link>
        </div>
      </form>
      <div className="register-link">
        کاربر جدید هستید؟ <Link to="/signup">از اینجا ثبت‌نام کنید</Link>
      </div>
    </div>
  );
};

export default LoginPage;

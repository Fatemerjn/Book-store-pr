import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('isLoggedIn');
    if (userLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleUserIconClick = () => {
    if (isLoggedIn) {
      navigate('/user-profile');
    } else {
      navigate('/login');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="icon">
          <div className="user-icon" onClick={handleUserIconClick}></div>
          <Link to="/cart">
            <div className="cart-icon"></div>
          </Link>
        </div>
        <div className="navbar-right">
          <input className="search-box" type="text" placeholder="...جستجو کن" />
          <Link to="/">
            <div className="navbar-logo" style={{ backgroundImage: `url(${logo})` }}></div>
          </Link>
        </div>
      </div>
      <div className="navbar-bottom">
        <ul className="navbar-list">
          <li className="navbar-item"><a href="#">علمی</a></li>
          <li className="navbar-item"><a href="#">رمان</a></li>
          <li className="navbar-item"><a href="#">عاشقانه</a></li>
          <li className="navbar-item"><a href="#">شعر و ادبیات</a></li>
          <li className="navbar-item"><a href="#">اجتماعی</a></li>
          <li className="navbar-item"><a href="#">تاریخی</a></li>
          <li className="navbar-item"><a href="#">فلسفه</a></li>
          <li className="navbar-item"><a href="#">سیاسی</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

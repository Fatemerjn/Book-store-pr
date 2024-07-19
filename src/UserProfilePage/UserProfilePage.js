import React from 'react';
import './UserProfilePage.css';
import bookCover from './book-cover.png';

const UserProfilePage = () => {
  return (
    <div className="user-profile-page">
      <div className="user-profile-container">
        <div className="user-profile-section">
          <h3>لیست کتاب های من</h3>
          <div className="user-profile-book-list">
            <div className="user-profile-book-item">
              <img src={bookCover} alt="Book Cover" />
              <p>یادداشت های روزانه من</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <div className="user-profile-book-item">
              <img src={bookCover} alt="Book Cover" />
              <p>یادداشت های روزانه من</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <div className="user-profile-book-item">
              <img src={bookCover} alt="Book Cover" />
              <p>یادداشت های روزانه من</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>
        <div className="user-profile-section">
          <h3>لیست علاقه مندی ها</h3>
          <div className="user-profile-book-list">
            <div className="user-profile-book-item">
              <img src={bookCover} alt="Book Cover" />
              <p>یادداشت های روزانه من</p>
            </div>
            <div className="user-profile-book-item">
              <img src={bookCover} alt="Book Cover" />
              <p>یادداشت های روزانه من</p>
            </div>
            <div className="user-profile-book-item">
              <img src={bookCover} alt="Book Cover" />
              <p>یادداشت های روزانه من</p>
            </div>
          </div>
        </div>
        <div className="user-profile-section">
          <h3>اطلاعات کاربری</h3>
          <form className="user-profile-info-form">
            <div className="user-profile-form-group">
              <label htmlFor="name">نام</label>
              <input type="text" id="name" placeholder="نام" />
            </div>
            <div className="user-profile-form-group">
              <label htmlFor="lastName">نام خانوادگی</label>
              <input type="text" id="lastName" placeholder="نام خانوادگی" />
            </div>
            <div className="user-profile-form-group">
              <label htmlFor="password">رمز عبور</label>
              <input type="password" id="password" placeholder="رمز عبور" />
            </div>
            <div className="user-profile-form-group">
              <label htmlFor="phoneNumber">شماره همراه</label>
              <input type="text" id="phoneNumber" placeholder="09*********" />
            </div>
            <button type="submit" className="user-profile-save-button">ذخیره</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;

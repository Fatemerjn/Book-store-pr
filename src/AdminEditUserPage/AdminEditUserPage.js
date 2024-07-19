import React from 'react';
import './AdminEditUserPage.css';
import AdminPage from '../AdminPage/AdminPage';

const AdminEditUserPage = () => {
  return (
    <div className="admin-edit-user-page">
      <AdminPage />
      <form className="user-form">
        <div className="form-group">
          <label htmlFor="name">نام</label>
          <input type="text" id="name" placeholder="نام" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">نام خانوادگی</label>
          <input type="text" id="lastName" placeholder="نام خانوادگی" />
        </div>
        <div className="form-group">
          <label htmlFor="password">رمز عبور</label>
          <input type="password" id="password" placeholder="رمز عبور" />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">شماره همراه</label>
          <input type="text" id="phoneNumber" placeholder="09*********" />
        </div>
        <button type="submit" className="save-button">ذخیره</button>
      </form>
    </div>
  );
};

export default AdminEditUserPage;

import React from 'react';
import { Link } from 'react-router-dom';
import './AdminPage.css';

const AdminPage = () => {
  return (
    <div className="admin-page">
      <h2>لیست:</h2>
      <ul className="admin-list">
        <li><Link to="/admin/books">کتاب ها</Link></li>
        <li><Link to="/admin/users">کاربران</Link></li>
        <li><Link to="/admin/topics">موضوعات</Link></li>
        <li><Link to="/admin/orders">گزارش سفارشات</Link></li>
      </ul>
    </div>
  );
};

export default AdminPage;

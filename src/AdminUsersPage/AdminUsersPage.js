import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminUsersPage.css';
import AdminPage from '../AdminPage/AdminPage';

const AdminUsersPage = () => {
  const navigate = useNavigate();

  const handleEditUser = () => {
    navigate('/admin/users/edit');
  };

  return (
    <div className="admin-users-page">
      <AdminPage />
      <table className="users-table">
        <thead>
          <tr>
            <th>شماره</th>
            <th>نام و نام خانوادگی</th>
            <th>تاریخ اضافه شدن</th>
            <th>شماره همراه</th>
            <th>تغییرات</th>
            <th>حذف کردن</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>نام و نام خانوادگی</td>
            <td>1111/11/11</td>
            <td>09111111111</td>
            <td><i className="fa fa-pen" onClick={handleEditUser}></i></td>
            <td><i className="fa fa-trash"></i></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsersPage;

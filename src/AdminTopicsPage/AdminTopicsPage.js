import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminTopicsPage.css';
import AdminPage from '../AdminPage/AdminPage';

const AdminTopicsPage = () => {
  const navigate = useNavigate();

  const handleEditTopic = () => {
    navigate('/admin/topics/edit');
  };

  return (
    <div className="admin-topics-page">
      <AdminPage />
      <button className="add-topic-button" onClick={handleEditTopic}>افزودن موضوع</button>
      <table className="topics-table">
        <thead>
          <tr>
            <th>شماره</th>
            <th>نام موضوع</th>
            <th>حذف کردن</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>موضوع</td>
            <td><i className="fa fa-trash" onClick={handleEditTopic}></i></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminTopicsPage;

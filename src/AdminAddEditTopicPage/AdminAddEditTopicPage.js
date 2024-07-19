import React from 'react';
import './AdminAddEditTopicPage.css';
import AdminPage from '../AdminPage/AdminPage';

const AdminAddEditTopicPage = () => {
  return (
    <div className="admin-add-edit-topic-page">
      <AdminPage />
      <form className="topic-form">
        <div className="form-group">
          <label htmlFor="topicName">نام موضوع</label>
          <input type="text" id="topicName" placeholder="نام موضوع" />
        </div>
        <button type="submit" className="save-button">ذخیره</button>
      </form>
    </div>
  );
};

export default AdminAddEditTopicPage;

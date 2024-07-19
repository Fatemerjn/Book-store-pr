import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminBooksPage.css';
import AdminPage from '../AdminPage/AdminPage';

const AdminBooksPage = () => {
  const navigate = useNavigate();


  const handleEditBook = () => {
    navigate('/admin/books/edit');
  };

  return (
    <div className="admin-books-page">
    <AdminPage />
      <button className="add-book-button" onClick={handleEditBook}>افزودن کتاب</button>
      <table className="books-table">
        <thead>
          <tr>
            <th>شماره</th>
            <th>نام کتاب</th>
            <th>موضوع</th>
            <th>قیمت</th>
            <th>تاریخ اضافه شدن</th>
            <th>قابل رویت</th>
            <th>تغییرات</th>
            <th>حذف کردن</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>نام کتاب</td>
            <td>موضوع</td>
            <td>111111</td>
            <td>1111/11/11</td>
            <td><i className="fa fa-eye"></i></td>
            <td><i className="fa fa-pen" onClick={handleEditBook}></i></td>
            <td><i className="fa fa-trash"></i></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminBooksPage;

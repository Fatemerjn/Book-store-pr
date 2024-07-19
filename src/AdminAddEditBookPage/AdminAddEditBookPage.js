import React from 'react';
import './AdminAddEditBookPage.css';
import AdminPage from '../AdminPage/AdminPage';

const AdminAddEditBookPage = () => {
  return (
    <div className="admin-add-edit-book-page">
      <AdminPage />
        <form className="book-form">
        <div className="form-group">
          <label htmlFor="bookName">نام کتاب</label>
          <input type="text" id="bookName" placeholder="نام کتاب" />
        </div>
        <div className="form-group">
          <label htmlFor="author">نویسنده</label>
          <input type="text" id="author" placeholder="نویسنده" />
        </div>
        <div className="form-group">
          <label htmlFor="publisher">ناشر</label>
          <input type="text" id="publisher" placeholder="ناشر" />
        </div>
        <div className="form-group">
          <label htmlFor="year">سال انتشار</label>
          <input type="text" id="year" placeholder="سال" />
        </div>
        <div className="form-group">
          <label htmlFor="pages">تعداد صفحات</label>
          <input type="text" id="pages" placeholder="تعداد" />
        </div>
        <div className="form-group">
          <label htmlFor="category">دسته بندی</label>
          <input type="text" id="category" placeholder="دسته بندی" />
        </div>
        <div className="form-group">
          <label htmlFor="description">توضیحات</label>
          <textarea id="description" placeholder="توضیحات"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="cover">آپلود جلد کتاب</label>
          <input type="file" id="cover" />
        </div>
        <div className="form-group">
          <label htmlFor="sample">آپلود نمونه صفحه کتاب</label>
          <input type="file" id="sample" />
        </div>
        <button type="submit" className="save-button">ذخیره</button>
      </form>
    </div>
  );
};

export default AdminAddEditBookPage;

import React from 'react';
import { useParams } from 'react-router-dom';
import './BookDetailsPage.css';
import bookCover from './book-cover.png';

const BookDetailsPage = () => {
  const { bookId } = useParams();

  return (
    <div className="book-details-page">
      <div className="book-details-container">
        <div className="book-prices">
          <div className="price-box">
            <h3>نسخه فیزیکی</h3>
            <p className="availability">وضعیت کالا: موجود</p>
            <p className="price">50000 تومان</p>
            <button className="add-to-cart-button">افزودن به سبد خرید</button>
          </div>
          <div className="price-box">
            <h3>نسخه الکترونیکی</h3>
            <p className="availability">وضعیت کالا: در دسترس</p>
            <p className="price">20000 تومان</p>
            <button className="add-to-cart-button">افزودن به سبد خرید</button>
          </div>
        </div>
        <div className="book-header">
          <img src={bookCover} alt="Book Cover" />
          <div className="book-info">
            <h2>یادداشت های روزانه من</h2>
            <p>نویسنده: امیر محمد</p>
           
          </div>
        </div>
        <div className="content">
              <p>دسته بندی: دسته بندی</p>
              <p>سال انتشار: سال</p>
              <p>تعداد صفحات: تعداد</p>
              <p>افزودن به علاقه‌مندی‌ها</p>
              <button className="download-button">دانلود رایگان نمونه صفحات نسخه فیزیکی</button>
            </div>

      </div>
      <div className="book-description">
        <h3>توضیحات / نظرات کاربران</h3>
        <p>اینجا متن توضیحات کتاب و نظرات کاربران نمایش داده می‌شود.</p>
        <textarea placeholder="نظر خود را بنویسید..."></textarea>
        <button className="submit-comment-button">ثبت نظر</button>
      </div>
    </div>
  );
};

export default BookDetailsPage;

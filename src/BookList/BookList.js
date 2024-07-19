import React from 'react';
import './BookList.css';
import bookCover from './book-cover.png';

const books = [
  {
    title: 'کتاب روزانه',
    price: '50000 تومان',
    img: bookCover
  },
];

const repeatedBooks = Array(14).fill(books[0]);

const BookList = () => {
  return (
    <div className="book-list-page">
      <div className="sort-bar">
        <span>مرتب‌سازی بر اساس:</span>
        <a href="#">جدیدترین</a>
        <a href="#">محبوب‌ترین</a>
        <a href="#">پرفروش‌ترین</a>
        <a href="#">ارزان‌ترین</a>
        <a href="#">گران‌ترین</a>
      </div>
      <div className="book-grid">
        {repeatedBooks.map((book, index) => (
          <div className="book-item" key={index}>
            <img src={book.img} alt={book.title} />
            <div className="book-title">{book.title}</div>
            <div className="book-price">{book.price}</div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default BookList;

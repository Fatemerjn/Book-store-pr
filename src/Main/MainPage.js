import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import bookCover from './book-cover.png';

const books = [
  {
    title: 'کتاب روزانه',
    price: '50000 تومان',
    img: bookCover
  },
];
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);
const repeatedBooks = Array(8).fill(books[0]);

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="section">
        <h2>جدیدترین ها</h2>
        <ColoredLine color="black" />
        <div className="book-list-wrapper">
          <Link to="/booklist">
            <button className="scroll-button left">
              <i className="fas fa-arrow-left"></i>
            </button>
          </Link>
          <div className="book-list">
            {repeatedBooks.map((book, index) => (
              <Link to={`/book/${book.id}`} key={index} className="book-item">
                <img src={book.img} alt={book.title} />
                <div className="book-title">{book.title}</div>
                <div className="book-price">{book.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="section" style={{backgroundColor:"#DC7C7C57"}}>
        <h2>پرفروش ترین های علمی</h2>
        <ColoredLine color="black" />
        <div className="book-list-wrapper">
          <Link to="/booklist">
            <button className="scroll-button left">
            <i className="fas fa-arrow-left"></i>
            </button>
          </Link>
          <div className="book-list">
            {repeatedBooks.map((book, index) => (
              <Link to={`/book/${book.id}`} key={index} className="book-item">
                <img src={book.img} alt={book.title} />
                <div className="book-title">{book.title}</div>
                <div className="book-price">{book.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

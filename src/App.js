import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import LoginPage from './LoginPage/LoginPage';
import SignupPage from './SignupPage/SignupPage';
import ForgotPasswordPage from './ForgotPasswordPage/ForgotPasswordPage';
import MainPage from './Main/MainPage';
import BookList from './BookList/BookList';
import CartPage from './CartPage/CartPage';
import BookDetailsPage from './BookDetailsPage/BookDetailsPage';
import ShippingPage from './ShippingPage/ShippingPage';
import FailedPayment from './FailedPayment/FailedPayment';
import SuccessPage from './SuccessPage/SuccessPage';
import UserProfilePage from './UserProfilePage/UserProfilePage';
import AdminPage from './AdminPage/AdminPage';
import AdminBooksPage from './AdminBooksPage/AdminBooksPage';
import AdminAddEditBookPage from './AdminAddEditBookPage/AdminAddEditBookPage';
import AdminUsersPage from './AdminUsersPage/AdminUsersPage';
import AdminEditUserPage from './AdminEditUserPage/AdminEditUserPage';
import AdminTopicsPage from './AdminTopicsPage/AdminTopicsPage';
import AdminAddEditTopicPage from './AdminAddEditTopicPage/AdminAddEditTopicPage';
import AdminOrderReportPage from './AdminOrderReportPage/AdminOrderReportPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/booklist" element={<BookList />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/book/:bookId" element={<BookDetailsPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/failed-payment" element={<FailedPayment />} />
          <Route path="/success-payment" element={<SuccessPage />} />
          <Route path="/user-profile" element={<UserProfilePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/books" element={<AdminBooksPage />} />
          <Route path="/admin/books/edit" element={<AdminAddEditBookPage />} />
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/users/edit" element={<AdminEditUserPage />} />
          <Route path="/admin/topics" element={<AdminTopicsPage />} />
          <Route path="/admin/topics/edit" element={<AdminAddEditTopicPage />} />
          <Route path="/admin/orders" element={<AdminOrderReportPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

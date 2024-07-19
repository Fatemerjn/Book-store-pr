import React, { useState } from 'react';
import './CartPage.css';
import { useNavigate } from 'react-router-dom';
import bookCover from './book-cover.png';

const initialCartItems = [
  {
    title: 'کتابخانه نیمه شب',
    price: '500.000 ریال',
    quantity: 1,
    img: bookCover,
    type: 'نسخه فیزیکی',
  },
  {
    title: 'کیمیاگر',
    price: '600.000 ریال',
    quantity: 2,
    img: bookCover,
    type: 'نسخه فیزیکی',
  },
  {
    title: 'کتابخانه نیمه شب',
    price: '500.000 ریال',
    quantity: 1,
    img: bookCover,
    type: 'نسخه الکترونیکی',
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const navigate = useNavigate();
  
  const handleIncrease = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += 1;
    setCartItems(newCartItems);
  };

  const handleDecrease = (index) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1;
      setCartItems(newCartItems);
    }
  };
  const handleCheckout = () => {
    navigate('/shipping');
  };

  const total = cartItems.reduce((acc, item) => acc + parseInt(item.price.replace(/\./g, '')) * item.quantity, 0).toLocaleString() + ' ریال';

  return (
    <div className="cart-page">
      <div className="checkout-steps">
        <span className="active">سبد خرید</span>
        <i className="fas fa-arrow-left"></i>
        <span>اطلاعات ارسال</span>
        <i className="fas fa-arrow-left"></i>
        <span>پرداخت</span>
      </div>
      <div className="cart-container">
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="quantity-control">
                <button onClick={() => handleIncrease(index)}>+</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleDecrease(index)}>-</button>
              </div>
            <p className="price-total">{(parseInt(item.price.replace(/\./g, '')) * item.quantity).toLocaleString()} ریال</p>

            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p className="type">{item.type}</p>
              <p className="price">قیمت واحد: {item.price}</p>
            </div>
            
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p>جمع کل: <span className="total-price">{total}</span></p>
        <button className="checkout-button" onClick={handleCheckout}>تکمیل خرید</button>
      </div>
      </div>
      
    </div>
  );
};

export default CartPage;

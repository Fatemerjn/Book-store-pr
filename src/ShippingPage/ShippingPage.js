import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ShippingPage.css';

const ShippingPage = () => {
  const [formData, setFormData] = useState({
    receiverName: '',
    lastName: '',
    mobileNumber: '',
    postalCode: '',
    province: '',
    city: '',
    address: '',
    notes: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = Object.values(formData).some(value => value === '');
    if (isEmpty) {
      navigate('/failed-payment');
    } else {
      navigate('/success-payment');
    }
  };

  return (
    <div className="shipping-page">
      <h2>سبد خرید</h2>
      <div className="checkout-steps">
        <span>خرید</span>
        <span className="active">اطلاعات ارسال</span>
        <span>پرداخت</span>
      </div>
      <form className="shipping-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="receiverName">نام تحویل‌گیرنده</label>
          <input type="text" id="receiverName" placeholder="نام تحویل‌گیرنده" value={formData.receiverName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">نام خانوادگی</label>
          <input type="text" id="lastName" placeholder="نام خانوادگی" value={formData.lastName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">شماره موبایل</label>
          <input type="text" id="mobileNumber" placeholder="شماره موبایل" value={formData.mobileNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">کد پستی</label>
          <input type="text" id="postalCode" placeholder="کد پستی" value={formData.postalCode} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="province">استان</label>
          <input type="text" id="province" placeholder="استان" value={formData.province} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="city">شهر</label>
          <input type="text" id="city" placeholder="شهر" value={formData.city} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="address">آدرس</label>
          <textarea id="address" placeholder="آدرس" value={formData.address} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="notes">توضیحات</label>
          <textarea id="notes" placeholder="توضیحات" value={formData.notes} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="submit-button">ثبت و پرداخت</button>
      </form>
    </div>
  );
};

export default ShippingPage;

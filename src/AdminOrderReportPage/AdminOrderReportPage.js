import React from 'react';
import './AdminOrderReportPage.css';
import AdminPage from '../AdminPage/AdminPage';

const AdminOrderReportPage = () => {
  return (
    <div className="admin-order-report-page">
      <AdminPage />
      <button className="main-report-button">گزارش فروش اصل</button>
      <table className="order-report-table">
        <thead>
          <tr>
            <th>شماره کاربر</th>
            <th>تاریخ ثبت سفارش</th>
            <th>مجموع هزینه</th>
            <th>وضعیت ارسال</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1111/11/11</td>
            <td>111111</td>
            <td>وضعیت</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrderReportPage;

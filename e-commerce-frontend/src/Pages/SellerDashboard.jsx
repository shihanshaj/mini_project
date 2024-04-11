import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const SellerDashboard = () => {
  return (
    <div>
      <h1>Seller Dashboard</h1>
      <button>
        <Link to="/add-product">Add Product</Link>
      </button>
      {/* Add content for other functionalities (e.g., view orders, manage products) */}
    </div>
  );
};

export default SellerDashboard;

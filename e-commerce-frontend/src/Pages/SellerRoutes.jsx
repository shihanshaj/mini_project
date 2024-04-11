import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SellerDashboard from './SellerDashboard'; // Import the SellerDashboard component
import AddProduct from '../AddProduct/AddProduct'; // Assuming the file is AddProduct.jsx

 // Import the AddProduct component

const SellerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SellerDashboard />} /> {/* Default route shows SellerDashboard */}
      <Route path="/add-product" element={<AddProduct />} /> {/* Route for adding product */}
      {/* Add more routes for other seller functionalities (e.g., ListProduct) */}
    </Routes>
  );
};

export default SellerRoutes;

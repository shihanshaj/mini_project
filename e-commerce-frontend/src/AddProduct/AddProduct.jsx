import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = () => {
  const [productDetails, setProductDetails] = useState({
    name: '',
    image: '',
    category: 'women',
    newPrice: '',
    oldPrice: '',
    location: '',
  });

  const handleChange = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setProductDetails({
      ...productDetails,
      image: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Handle image upload
    let imageUrl = '';
    if (productDetails.image) {
      const formData = new FormData();
      formData.append('image', productDetails.image);

      const response = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        imageUrl = data.imageUrl;
      } else {
        console.error('Image upload failed');
      }
    }

    // Submit product details
    const product = {
      ...productDetails,
      image: imageUrl,
      newPrice: parseFloat(productDetails.newPrice),
      oldPrice: parseFloat(productDetails.oldPrice),
    };

    const response = await fetch('http://localhost:4000/addproduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    const data = await response.json();
    if (data.success) {
      alert('Product added successfully!');
      setProductDetails({
        name: '',
        image: '',
        category: 'women',
        newPrice: '',
        oldPrice: '',
        location: '',
      });
    } else {
      alert('Failed to add product');
    }
  };

  return (
    <div className="addproduct">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="addproduct-itemfield">
          <label htmlFor="name">Product Title</label>
          <input
            type="text"
            id="name"
            name="name"
            value={productDetails.name}
            onChange={handleChange}
            placeholder="Type product title"
            required
          />
        </div>
        <div className="addproduct-price">
          <div className="addproduct-itemfield">
            <label htmlFor="oldPrice">Old Price</label>
            <input
              type="number"
              id="oldPrice"
              name="oldPrice"
              value={productDetails.oldPrice}
              onChange={handleChange}
              placeholder="Enter old price"
              required
            />
          </div>
          <div className="addproduct-itemfield">
            <label htmlFor="newPrice">New Price</label>
            <input
              type="number"
              id="newPrice"
              name="newPrice"
              value={productDetails.newPrice}
              onChange={handleChange}
              placeholder="Enter new price"
              required
            />
          </div>
        </div>
        <div className="addproduct-itemfield">
          <label htmlFor="category">Product Category</label>
          <select
            id="category"
            name="category"
            value={productDetails.category}
            onChange={handleChange}
          >
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
          </select>
        </div>
        <div className="addproduct-itemfield">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={productDetails.location}
            onChange={handleChange}
            placeholder="Enter location"
            required
          />
        </div>
        <div className="addproduct-itemfield">
          <label htmlFor="image">Product Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageUpload}
            required
          />
        </div>
        <button type="submit" className="addproduct-btn">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
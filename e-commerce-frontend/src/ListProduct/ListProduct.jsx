import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import crossIcon from '../Assets/cross_icon.png';

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:4000/allproducts');
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const removeProduct = async (id) => {
    try {
      await fetch('http://localhost:4000/removeproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      fetchProducts();
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  return (
    <div className="listproduct">
      <h2>All Products List</h2>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Location</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allProducts.map((product) => (
          <div key={product.id}>
            <div className="listproduct-format-main listproduct-format">
              <img
                className="listproduct-product-icon"
                src={product.image}
                alt={product.name}
              />
              <p>{product.name}</p>
              <p>₹{product.oldPrice}</p>
              <p>₹{product.newPrice}</p>
              <p>{product.category}</p>
              <p>{product.location}</p>
              <img
                className="listproduct-remove-icon"
                src={crossIcon}
                alt="Remove"
                onClick={() => removeProduct(product.id)}
              />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
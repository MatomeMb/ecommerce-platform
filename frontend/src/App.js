// src/App.js
import React from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import './index.css';


const App = () => {
  return (
    <div>
      <h1>Welcome to the Ecommerce Platform</h1>
      <ProductForm />
      <ProductList />
    </div>
  );
};

export default App;

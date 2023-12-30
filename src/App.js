import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/productdetail/:id" element={<ProductDetail />} />
      {/* Add more routes for individual products if needed */}
    </Routes>
  </Router>
);

export default App;

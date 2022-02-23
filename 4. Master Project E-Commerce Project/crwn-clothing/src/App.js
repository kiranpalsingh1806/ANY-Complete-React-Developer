import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import ShopPage from './pages/shop/shop.component';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Header />
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
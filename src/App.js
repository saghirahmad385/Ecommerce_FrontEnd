import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import ProductDetails from './components/Product/ProductDetails.js';
import Products from './components/Product/Products.js';
import Search from './components/Product/Search.js';
import LoginSignUp from './components/User/LoginSignUp.js';
import LoginSignUp2 from './components/User/LoginSignUp2.js';
import UserProfile from './components/User/UserProfile.js';

export default function App() {
  return (
    <Router>
      {/* Header Component */}
      <Header />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        {/* <Route exact path="/login" element={<LoginSignUp />} /> */}
        <Route exact path="/login" element={<LoginSignUp2 />} />

        <Route path="/account" element={<UserProfile />} />
      </Routes>

      {/* Footer Component */}
      <Footer />
    </Router>
  );
}

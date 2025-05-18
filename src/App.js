import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About/About.js";
import ContactUs from "./components/contactus";
import HowItWorks from "./components/Howitworks/howitwork.js";
import Basicnft from "./components/products/basicnfts.js"; 
import "./styles/responsive.css";
import LimitedNFTs from "./components/products/limitednfts.js";
import SpecialNFTs from "./components/products/specialnfts.js";
import Wallets from "./components/payment/connect.js";  
import Success from "./components/payment/success.js";
import Cancel from "./components/payment/cancel.js";
import Crypto from "./components/cryptotrading/crypto.js";
import Coin from "./components/cryptotrading/coin.js";
import Signup from "./components/Login/Signup.js";
import Login from "./components/Login/Login.js";
import Trade from "./components/cryptotrading/Buy&Sell.js";
import News from "./components/news/news.js";
import SpotTrade from "./components/cryptotrading/spot/spotTrade.js";
import SpotTradingPage from "./components/cryptotrading/spot/twspotTrade.js";

const App = () => {
  const [token, setToken] = useState(null);

  // Save token to sessionStorage if available
  useEffect(() => {
    if (token) {
      sessionStorage.setItem("token", JSON.stringify(token));
    }
  }, [token]);

  // Retrieve token from sessionStorage on load
  useEffect(() => {
    const savedToken = sessionStorage.getItem("token");
    if (savedToken) {
      setToken(JSON.parse(savedToken));
    }
  }, []);

  // Protected Route Component
  const ProtectedRoute = ({ element }) => {
    return token ? element : <Navigate to="/" replace />;
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <Routes>
          {/* Public Routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login setToken={setToken} />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/spottrade" element={<SpotTrade />} />


          {/* Protected Routes */}
          <Route path="/about" element={<ProtectedRoute element={<About />} />} />
          <Route path="/contactus" element={<ProtectedRoute element={<ContactUs />} />} />
          <Route path="/howitwork" element={<ProtectedRoute element={<HowItWorks />} />} />
          <Route path="/basicnfts" element={<ProtectedRoute element={<Basicnft />} />} />
          <Route path="/limitednfts" element={<ProtectedRoute element={<LimitedNFTs />} />} />
          <Route path="/specialnfts" element={<ProtectedRoute element={<SpecialNFTs />} />} />
          <Route path="/connect" element={<ProtectedRoute element={<Wallets />} />} />
          <Route path="/success" element={<ProtectedRoute element={<Success />} />} />
          <Route path="/cancel" element={<ProtectedRoute element={<Cancel />} />} />
          <Route path="/crypto" element={<ProtectedRoute element={<Crypto />} />} />
          <Route path="/coin/:coinId" element={<ProtectedRoute element={<Coin />} />} />
          <Route path="/news" element={<ProtectedRoute element={<News />} />} />
          <Route path="/twspottrade" element={<ProtectedRoute element = {<SpotTradingPage />} />} />

        </Routes>
      </main>
    </div>
  );
};

export default App;

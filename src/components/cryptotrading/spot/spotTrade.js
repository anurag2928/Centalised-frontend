import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.min.css';

const SpotTrade = () => {
  const [symbol, setSymbol] = useState('BTCUSDT'); // Default trading pair
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [orderUpdates, setOrderUpdates] = useState([]);
  const [accountUpdates, setAccountUpdates] = useState([]);

  const socket = io('http://localhost:3001'); // Connect to the backend's Socket.IO server

  useEffect(() => {
    // Listen to order and account updates from the backend
    socket.on('orderUpdate', (update) => {
      setOrderUpdates((prevUpdates) => [update, ...prevUpdates]); // Add the latest update to the top
    });

    socket.on('accountUpdate', (update) => {
      setAccountUpdates((prevUpdates) => [update, ...prevUpdates]);
    });

    return () => {
      socket.disconnect(); // Disconnect from the socket on component unmount
    };
  }, );

  const handleBuyOrder = async () => {
    if (!price || !amount) {
      alert('Price and Amount are required!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/buy', {
        symbol,
        quantity: amount,
        price,
      });
      alert('Buy Order Placed Successfully!');
      console.log(response.data);
    } catch (error) {
      alert(`Error placing buy order: ${error.response?.data?.error || error.message}`);
    }
  };

  const handleSellOrder = async () => {
    if (!price || !amount) {
      alert('Price and Amount are required!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/sell', {
        symbol,
        quantity: amount,
        price,
      });
      alert('Sell Order Placed Successfully!');
      console.log(response.data);
    } catch (error) {
      alert(`Error placing sell order: ${error.response?.data?.error || error.message}`);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Spot Trading</h2>
      <div className="card shadow-sm">
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="symbol" className="form-label">
                Trading Pair
              </label>
              <select
                id="symbol"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                className="form-select"
              >
                <option value="BTCUSDT">BTC/USDT</option>
                <option value="ETHUSDT">ETH/USDT</option>
                <option value="BNBUSDT">BNB/USDT</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="form-control"
                placeholder="Enter price"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="form-control"
                placeholder="Enter amount"
              />
            </div>

            <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-success w-45" onClick={handleBuyOrder}>
                Buy
              </button>
              <button type="button" className="btn btn-danger w-45" onClick={handleSellOrder}>
                Sell
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-5">
        <h3>Order Updates</h3>
        <ul className="list-group">
          {orderUpdates.map((update, index) => (
            <li key={index} className="list-group-item">
              <strong>Order Update:</strong> {JSON.stringify(update)}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5">
        <h3>Account Updates</h3>
        <ul className="list-group">
          {accountUpdates.map((update, index) => (
            <li key={index} className="list-group-item">
              <strong>Account Update:</strong> {JSON.stringify(update)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SpotTrade;

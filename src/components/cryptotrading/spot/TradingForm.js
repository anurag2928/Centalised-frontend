import React, { useState } from "react";
import axios from "axios";

const TradingForm = () => {
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [symbol, setSymbol] = useState("ETHUSDT"); // Default trading pair

  const handleBuy = async () => {
    try {
      const response = await axios.post("/api/orders", {
        symbol,
        price,
        quantity: amount,
        side: "BUY", // Specify the action (buy)
      });
      console.log("Buy Order Response:", response.data);
      alert("Buy Order Placed Successfully");
    } catch (error) {
      console.error("Error placing buy order:", error.response?.data || error.message);
      alert("Failed to place buy order");
    }
  };

  const handleSell = async () => {
    try {
      const response = await axios.post("/api/orders", {
        symbol,
        price,
        quantity: amount,
        side: "SELL", // Specify the action (sell)
      });
      console.log("Sell Order Response:", response.data);
      alert("Sell Order Placed Successfully");
    } catch (error) {
      console.error("Error placing sell order:", error.response?.data || error.message);
      alert("Failed to place sell order");
    }
  };

  return (
    <div>
      <h5 className="card-title">Trading Form</h5>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Symbol (e.g., ETHUSDT)"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-between">
        <button className="btn btn-success" onClick={handleBuy}>
          Buy
        </button>
        <button className="btn btn-danger" onClick={handleSell}>
          Sell
        </button>
      </div>
    </div>
  );
};

export default TradingForm;

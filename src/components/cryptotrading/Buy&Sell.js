import React, { useState } from 'react';

function Trade() {
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleBuy = async () => {
    const response = await fetch('http://localhost:3001/buy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ symbol, quantity, price }),
    });
    const data = await response.json();
    console.log(data);
  };

  const handleSell = async () => {
    const response = await fetch('http://localhost:3001/sell', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ symbol, quantity, price }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Trade Cryptocurrency</h1>
      <input
        type="text"
        placeholder="Symbol (e.g., BTCUSDT)"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleBuy}>Buy</button>
      <button onClick={handleSell}>Sell</button>
    </div>
  );
}

export default Trade;

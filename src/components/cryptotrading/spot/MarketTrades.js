import React from "react";

const MarketTrades = ({ trades }) => {
  return (
    <div>
      <h5 className="card-title">Market Trades</h5>
      <ul className="list-group">
        {trades.map((trade, index) => (
          <li key={index} className="list-group-item">
            Price: <strong>{trade.p}</strong>, Amount: {trade.q}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketTrades;

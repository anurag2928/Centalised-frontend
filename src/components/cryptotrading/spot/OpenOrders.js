import React from "react";

const OpenOrders = ({ openOrders }) => {
  return (
    <div>
      <h5 className="card-title">Open Orders</h5>
      <ul className="list-group">
        {openOrders.map((order, index) => (
          <li key={index} className="list-group-item">
            Symbol: <strong>{order.s}</strong>, Price: {order.p}, Quantity: {order.q}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpenOrders;

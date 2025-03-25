import React from "react";

const OrderBook = ({ orderBook }) => {
  return (
    <div>
      <h5 className="card-title">Order Book</h5>
      <div className="row">
        <div className="col-6">
          <h6>Asks</h6>
          {orderBook.asks?.map((ask, index) => (
            <p key={index}>
              <strong>{ask[0]}</strong> - {ask[1]}
            </p>
          ))}
        </div>
        <div className="col-6">
          <h6>Bids</h6>
          {orderBook.bids?.map((bid, index) => (
            <p key={index}>
              <strong>{bid[0]}</strong> - {bid[1]}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderBook;

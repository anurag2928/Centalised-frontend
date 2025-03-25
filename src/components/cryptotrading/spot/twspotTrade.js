import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

const SpotTradingPage = () => {
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");

  const handleBuy = () => {
    alert(`Buying ETH at ${price} USDT for ${amount} ETH.`);
  };

  const handleSell = () => {
    alert(`Selling ETH at ${price} USDT for ${amount} ETH.`);
  };

  return (
    <div className="container py-4">
      <header className="text-center mb-4">
        <h1 className="display-4">Spot Trading</h1>
      </header>

      <div className="row">
        <div className="col-lg-8 col-md-7 col-sm-12 mb-4">
          <div className="card h-100"> {/* Ensures card height adapts */}
            <div className="card-body">
              <AdvancedRealTimeChart
                symbol="BINANCE:ETHUSDT"
                theme="dark"
                autosize
                width="100%"
                height={600} // Increased chart height for better visibility
              />
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-5 col-sm-12">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="h5 mb-3">Place Your Order</h2>
              <form>
                <div className="mb-3">
                  <label className="form-label">Trading Pair</label>
                  <select className="form-select">
                    <option value="ETH/USDT">ETH/USDT</option>
                    <option value="BTC/USDT">BTC/USDT</option>
                    <option value="BNB/USDT">BNB/USDT</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Price (USDT)</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Amount (ETH)</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>

                <div className="d-grid gap-2">
                  <button
                    type="button"
                    onClick={handleBuy}
                    className="btn btn-success"
                  >
                    Buy
                  </button>
                  <button
                    type="button"
                    onClick={handleSell}
                    className="btn btn-danger"
                  >
                    Sell
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h2>Order Updates</h2>
        <p>No recent updates.</p>

        <h2>Account Updates</h2>
        <p>No account updates available.</p>
      </div>
    </div>
  );
};

export default SpotTradingPage;

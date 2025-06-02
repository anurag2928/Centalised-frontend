import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

const symbolMap = {
  "ETH/USDT": "ETHUSDT",
  "BTC/USDT": "BTCUSDT",
  "BNB/USDT": "BNBUSDT",
};

const SpotTradingPage = () => {
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [orderBook, setOrderBook] = useState({ buy: [], sell: [] });
  const [basePrice, setBasePrice] = useState(3800);
  const [pair, setPair] = useState("ETH/USDT");

  const fetchLivePrice = async (symbol) => {
    try {
      const response = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`);
      const data = await response.json();
      if (data?.price) {
        const livePrice = parseFloat(data.price);
        setBasePrice(livePrice);
      }
    } catch (error) {
      console.error("Failed to fetch live price:", error);
    }
  };

  const generateRealisticOrders = useCallback(() => {
    const priceFluctuation = (base, spread, isBuy) =>
      isBuy
        ? base - Math.random() * spread
        : base + Math.random() * spread;

    const orders = (type) =>
      Array.from({ length: 15 }, () => {
        const price = priceFluctuation(basePrice, basePrice * 0.002, type === "buy");
        return {
          price: price.toFixed(2),
          amount: (Math.random() * 3 + 0.1).toFixed(4),
          type,
        };
      }).sort((a, b) =>
        type === "buy" ? b.price - a.price : a.price - b.price
      );

    setOrderBook({
      buy: orders("buy"),
      sell: orders("sell"),
    });
  }, [basePrice]);

  useEffect(() => {
    fetchLivePrice(symbolMap[pair]);
    const liveInterval = setInterval(() => fetchLivePrice(symbolMap[pair]), 5000);
    return () => clearInterval(liveInterval);
  }, [pair]);

  useEffect(() => {
    generateRealisticOrders();
    const interval = setInterval(generateRealisticOrders, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, [generateRealisticOrders]);

  const handleBuy = () => {
    alert(`Buying ${amount} ${pair.split("/")[0]} at ${price} ${pair.split("/")[1]}`);
  };

  const handleSell = () => {
    alert(`Selling ${amount} ${pair.split("/")[0]} at ${price} ${pair.split("/")[1]}`);
  };

  return (
    <div className="container py-4">
      <header className="text-center mb-4">
        <h1 className="display-4">Spot Trading</h1>
      </header>

      <div className="row">
        <div className="col-lg-8 col-md-7 col-sm-12 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <AdvancedRealTimeChart
                symbol={`BINANCE:${symbolMap[pair]}`}
                theme="dark"
                autosize
                width="100%"
                height={600}
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
                  <select
                    className="form-select"
                    value={pair}
                    onChange={(e) => setPair(e.target.value)}
                  >
                    <option value="ETH/USDT">ETH/USDT</option>
                    <option value="BTC/USDT">BTC/USDT</option>
                    <option value="BNB/USDT">BNB/USDT</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Price ({pair.split("/")[1]})</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Amount ({pair.split("/")[0]})</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>

                <div className="d-grid gap-2">
                  <button type="button" onClick={handleBuy} className="btn btn-success">
                    Buy
                  </button>
                  <button type="button" onClick={handleSell} className="btn btn-danger">
                    Sell
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Order Book */}
      <div className="row mt-4">
        <div className="col-md-12">
          <h2 className="mb-3">Realistic Order Book</h2>

          <div className="row">
            <div className="col-md-6">
              <h5 className="text-success">Buy Orders</h5>
              <table className="table table-sm table-striped">
                <thead>
                  <tr>
                    <th>Price ({pair.split("/")[1]})</th>
                    <th>Amount ({pair.split("/")[0]})</th>
                  </tr>
                </thead>
                <tbody>
                  {orderBook.buy.map((order, i) => (
                    <tr key={i}>
                      <td>{order.price}</td>
                      <td>{order.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="col-md-6">
              <h5 className="text-danger">Sell Orders</h5>
              <table className="table table-sm table-striped">
                <thead>
                  <tr>
                    <th>Price ({pair.split("/")[1]})</th>
                    <th>Amount ({pair.split("/")[0]})</th>
                  </tr>
                </thead>
                <tbody>
                  {orderBook.sell.map((order, i) => (
                    <tr key={i}>
                      <td>{order.price}</td>
                      <td>{order.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Updates Section */}
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

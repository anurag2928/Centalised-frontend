import React from 'react';
import './coin.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { CoinContext } from '../../context/CoinContext';
import LineChart from '../LineChart/LineChart';



const Coin = () => {

    const { coinId } = useParams();
    const [coinData, setCoinData] = useState();
    const [historicalData, setHistoricalData] = useState();
    const { currency } = useContext(CoinContext);

    const fetchCoinData = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-DSKUYqk3E6R8ZBTr6BEdqGVi' }
        };

        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
            .then(res => res.json())
            .then(res => setCoinData(res))
            .catch(err => console.error(err));
    }

    const fetchHistoricalData = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-DSKUYqk3E6R8ZBTr6BEdqGVi' }
        };

        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
            .then(res => res.json())
            .then(res => setHistoricalData(res))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchCoinData();
        fetchHistoricalData();
    });

    if (coinData && historicalData) {
        return (
            <div className="coin">
                <div className="coin-name">
                    <img src={coinData.image.large} alt="" />
                    <p>
                        <b>{coinData.name}</b> ({coinData.symbol.toUpperCase()})
                    </p>
                </div>
                <div className="coin-chart">
                    <LineChart historicalData={historicalData} />
                </div>
                <div className="coin-info">
                    <ul>
                        <li>Crypto Market Rank</li>
                        <li>{coinData.market_cap_rank}</li>
                    </ul>
                    <ul>
                        <li>Crypto Price</li>
                        <li>{currency.symbol}{coinData.market_data.current_price[currency.name].toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li>Market Cap</li>
                        <li>{currency.symbol}{coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li>24 Hour High</li>
                        <li>{currency.symbol}{coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li>24 Hour Low</li>
                        <li>{currency.symbol}{coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
                    </ul>
                </div>

            </div>
        );
    } else {
        return (
            <div className="spinner">
                <div className="spin"></div>
            </div>
        );
    }

};

export default Coin;
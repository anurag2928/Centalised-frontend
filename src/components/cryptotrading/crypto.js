import React, { useState, useEffect, useContext } from 'react';
import './crypto.css';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';    

const Crypto = () => {
    const { allCoin, currency } = useContext(CoinContext);
    const [displayCoin, setDisplayCoin] = useState([]);
    const [input, setInput] = useState('');

    const inputHandler = (e) => {
        setInput(e.target.value);
        // if (e.target.value === '') {
        //     setDisplayCoin(allCoin);
        // }
    }

    const searchHandler = (e) => {
        e.preventDefault();
        // if (input.trim() === '') {
        //     setDisplayCoin(allCoin); // Reset to all coins if the input is empty
        //     return;
        // }
        const coins = allCoin.filter(coin => {
            return coin.name.toLowerCase().includes(input.toLowerCase());
        });
        // console.log(coins);
        setDisplayCoin(coins);
    }

    useEffect(() => {
        setDisplayCoin(allCoin);
    }, [allCoin]);

    return (
        <div className='home'>
            <div className='hero'>
                <h1>Largest <br /> Crypto Marketplace</h1>
                <p>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>
                <form onSubmit={searchHandler}>
                    <input onChange={inputHandler}  value={input} type='text' placeholder='Search crypto..' required />
                    {/* <datalist id="coinlist">
                        {allCoin.map((item, index) => (
                            <option key={index} value={item.name} />
                        ))}
                    </datalist> */}
                    <button type='submit'>Search</button>
                </form>
            </div>
            <div className="crypto-table">
                <div className="table-layout">
                    <p>#</p>
                    <p>Coins</p>
                    <p>Price</p>
                    <p style={{ textAlign: "center" }}>24H Change</p>
                    <p className="market-cap">Market Cap</p>
                </div>
                {

                    displayCoin.slice(0, 20).map((item, index) => (
                        <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
                            <p>{item.market_cap_rank}</p>
                            <div>
                                <img src={item.image} alt="" />
                                <p>{item.name + " - " + item.symbol}</p>
                            </div>
                            <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
                            <p className={item.price_change_percentage_24h > 0 ? "green" : "red"}>
                                {Math.floor(item.price_change_percentage_24h * 100) / 100}</p>
                            <p className="market-cap">
                                {currency.symbol} {item.market_cap.toLocaleString()}
                            </p>
                        </Link>
                    ))
                }

            </div>


        </div>
    );
};

export default Crypto;

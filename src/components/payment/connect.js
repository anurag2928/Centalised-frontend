import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import "../../styles/connect.css";

const wallets = [
    {
        type: "TRC20",
        address: "TEh24m7hDGxDCXqsxeFcYnnUQbK73CamwS",
        imgSrc: "/images/TRC20.jpeg",
    },
    {
        type: "ERC20",
        address: "0x185247675157BB70B3aD20687353dD53EB0eff5E",
        imgSrc: "/images/ERC20.jpeg",
    },
    {
        type: "BEP2",
        address: "bnb1ye98h5rxudwe0wah0zyrj2ye658qqr2emyfqls",
        imgSrc: "/images/BEP2.jpeg",
    },
    {
        type: "BEP20",
        address: "0x185247675157BB70B3aD20687353dD53EB0eff5E",
        imgSrc: "/images/BEP20.jpeg",
    },
];

const WalletCard = ({ wallet }) => {
    const copyAddress = () => {
        navigator.clipboard.writeText(wallet.address)
            .then(() => {
                alert("Wallet address copied to clipboard!");
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
            });
    };

    // const buyFunction = async () => {
    //     try {
    //         let response = await axios.post('http://localhost:3001/payment');
    //         if (response && response.status === 200) {
    //             // Redirect to the payment URL
    //             window.location.href = response.data.url;
    //             console.log(response.data.url);
    //         }
    //     } catch (error) {
    //         console.error("Error initiating payment:", error);
    //     }
    // };

    return (
        <div className="col-12 col-sm-6 col-lg-4">
            <div className="wallet-container">
                <h5>My Wallet Address</h5>
                <img src={wallet.imgSrc} alt="QR Code" className="img-fluid mb-3" />
                <p className="wallet-address">{wallet.type}</p>
                <p className="wallet-address">{wallet.address}</p>
                <button className="copy-btn mb-2" onClick={copyAddress}>Copy Wallet Address</button>
                {/* <button className="buy-btn" onClick={buyFunction}>Buy Now</button> */}
            </div>
        </div>
    );
};

const Wallets = () => {
    const [priceAmount, setPriceAmount] = useState(0);
    const [email, setEmail] = useState("");

    const handleOtherPaymentOption = async (e) => {
        e.preventDefault();
        if (!priceAmount || !email) {
            alert("Please enter a valid amount and email");
            return;
        }
        try {
            let response = await axios.post('http://localhost:3001/payment', {
                priceAmount,
                email,
            });
            if (response && response.data.url) {
                window.location.href = response.data.url;
            }
        } catch (error) {
            console.error("Error initiating payment:", error);
        }
    };

    return (
        <div className="connect">
            <div className="container py-5">
                <div className="row justify-content-center g-4">
                    {wallets.map((wallet, index) => (
                        <WalletCard key={index} wallet={wallet} />
                    ))}
                </div>
                <div className="row justify-content-center mt-4">
                    <form className="payment-form" onSubmit={handleOtherPaymentOption}>
                        <div className="mb-3">
                            <label htmlFor="priceAmount" className="form-label">Enter Amount</label>
                            <input
                                type="number"
                                id="priceAmount"
                                className="form-control"
                                value={priceAmount}
                                onChange={(e) => setPriceAmount(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Enter Email</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="buy-btn">Other Payment Option</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Wallets;

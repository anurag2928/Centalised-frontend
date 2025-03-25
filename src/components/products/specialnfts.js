import React from "react";
import "../../styles/NFTStyles.css";
import { useNavigate } from "react-router-dom";

const NFTCard = ({ title, price, image, modalId }) => (
  <div className="col-md-4">
    <div className="nft-card">
      <img src={image} alt={`${title} NFT`} className="img-fluid mb-3" />
      <h3>{title}</h3>
      <p>${price}</p>
      <button
        className="btn btn-buy"
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
      >
        Buy
      </button>
    </div>
  </div>
);

const NFTModal = ({ id, title, price, image }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavigate = () => {
    navigate("/connect"); // Navigate programmatically
  };

  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      aria-labelledby={`${id}Label`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${id}Label`}>
              {title} Details
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <img src={image} alt={`${title} NFT`} className="img-fluid mb-3" />
            <p>
              <strong>Price:</strong> ${price}
            </p>
            <p>
              <strong>Type:</strong> Special NFT
            </p>
            <p>
              <strong>Subscription Period:</strong> 5 DAYS
            </p>
            <p>
              <strong>Capacity (Steps):</strong> 10,000
            </p>
            <p>
              <strong>Per Day Reward:</strong> Up to 0.10%
            </p>
            <p>
              <strong>Sold:</strong> 4,270 NFT
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={handleNavigate} // Use the navigation function here
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpecialNFTs = () => {
  const specialNFTData = [
    { id: "1", title: "Antimatter 1", price: 50000, image: "images/nft/special/s1.jpeg" },
    { id: "2", title: "Antimatter 2", price: 75000, image: "images/nft/special/s2.jpeg" },
    { id: "3", title: "Antimatter 3", price: 100000, image: "images/nft/special/s3.jpeg" },
    { id: "4", title: "Antimatter 4", price: 150000, image: "images/nft/special/s4.jpeg" },
    { id: "5", title: "Antimatter 5", price: 200000, image: "images/nft/special/s5.jpeg" },
    { id: "6", title: "Antimatter 6", price: 250000, image: "images/nft/special/s6.jpeg" },
    { id: "7", title: "Antimatter 7", price: 300000, image: "images/nft/special/s7.jpeg" },
    { id: "8", title: "Antimatter 8", price: 350000, image: "images/nft/special/s8.jpeg" },
    { id: "9", title: "Antimatter 9", price: 400000, image: "images/nft/special/s9.jpeg" },
    { id: "10", title: "Antimatter 10", price: 500000, image: "images/nft/special/s10.jpeg" },
    { id: "11", title: "SAN 1", price: 100000, image: "images/nft/special/s11.jpeg" },
    { id: "12", title: "SAN 2", price: 200000, image: "images/nft/special/s12.jpeg" },
    { id: "13", title: "SAN 3", price: 400000, image: "images/nft/special/s13.jpeg" },
  ];
  

  return (
    <div className="basic-nft-page">
    <div className="container py-5">
      <h1 className="text-center mb-4">Special NFTs</h1>
      <div className="row g-4">
        {specialNFTData.map((nft) => (
          <NFTCard key={nft.id} {...nft} modalId={nft.id} />
        ))}
      </div>
      <div className="modals">
        {specialNFTData.map((nft) => (
          <NFTModal key={nft.id} id={nft.id} {...nft} />
        ))}
      </div>
    </div>
  </div>
  );
};

export default SpecialNFTs;

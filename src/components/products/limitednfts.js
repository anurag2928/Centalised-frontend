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

const Modal = ({ id, title, price, image, details }) => {
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
            <img
              src={image}
              alt={`${title} NFT`}
              className="img-fluid mb-3"
            />
            {details.map((detail, index) => (
              <p key={index}>
                <strong>{detail.label}:</strong> {detail.value}
              </p>
            ))}
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

const LimitedNFTs = () => {
  const nftData = [
    { id: "22", title: "Gold Walker", price: 5000, image: "images/nft/basicnft22.jpeg", details: [
        { label: "Type", value: "Basic NFT" },
        { label: "Subscription Period", value: "3 Days" },
        { label: "Capacity (Steps)", value: "50,000" },
        { label: "Per Day Reward", value: "Up to 0.25%" },
        { label: "Sold", value: "4,270 NFT" },
    ]},
    { id: "23", title: "Gold Jogger", price: 7500, image: "images/nft/basicnft23.jpeg", details: [
        { label: "Type", value: "Basic NFT" },
        { label: "Subscription Period", value: "3 Days" },
        { label: "Capacity (Steps)", value: "50,000" },
        { label: "Per Day Reward", value: "Up to 0.25%" },
        { label: "Sold", value: "4,270 NFT" },
    ]},
    { id: "24", title: "Gold Runner", price: 10000, image: "images/nft/basicnft24.jpeg", details: [
        { label: "Type", value: "Basic NFT" },
        { label: "Subscription Period", value: "3 Days" },
        { label: "Capacity (Steps)", value: "50,000" },
        { label: "Per Day Reward", value: "Up to 0.25%" },
        { label: "Sold", value: "4,270 NFT" },
    ]},
    { id: "specialone", title: "Gold Marathoner", price: 12500, image: "images/nft/specialnft1.jpeg", details: [
        { label: "Type", value: "Special NFT" },
        { label: "Subscription Period", value: "3 Days" },
        { label: "Capacity (Steps)", value: "50,000" },
        { label: "Per Day Reward", value: "Up to 0.25%" },
        { label: "Sold", value: "4,270 NFT" },
    ]},
    { id: "specialtwo", title: "Ruby Walker", price: 15000, image: "images/nft/specialnft2.jpeg", details: [
        { label: "Type", value: "Special NFT" },
        { label: "Subscription Period", value: "3 Days" },
        { label: "Capacity (Steps)", value: "50,000" },
        { label: "Per Day Reward", value: "Up to 0.25%" },
        { label: "Sold", value: "4,270 NFT" },
    ]},
    { id: "specialthree", title: "Ruby Jogger", price: 17500, image: "../../images/nft/specialnft3.jpeg", details: [
        { label: "Type", value: "Special NFT" },
        { label: "Subscription Period", value: "3 Days" },
        { label: "Capacity (Steps)", value: "50,000" },
        { label: "Per Day Reward", value: "Up to 0.25%" },
        { label: "Sold", value: "4,270 NFT" },
    ]},
    { id: "specialfour", title: "Ruby Runner", price: 20000, image: "images/nft/specialnft4.jpeg", details: [
        { label: "Type", value: "Special NFT" },
        { label: "Subscription Period", value: "3 Days" },
        { label: "Capacity (Steps)", value: "50,000" },
        { label: "Per Day Reward", value: "Up to 0.25%" },
        { label: "Sold", value: "4,270 NFT" },
    ]},
    {
      id: "specialfour1",
      title: "Ruby Marathoner",
      price: 22500,
      image: "images/nft/special/s1.jpeg",
      details: [
        { label: "Type", value: "Basic NFT" },
        { label: "Subscription Period", value: "3 days" },
        { label: "Capacity (Steps)", value: "50,000" },
        { label: "Per Day Reward", value: "Up to 0.25%" },
        { label: "Sold", value: "4,270 NFT" },
      ],
    },
    {
      id: "specialfour2",
      title: "Premium Walker",
      price: 25000,
      image: "images/nft/special/s2.jpeg",
      details: [
        { label: "Type", value: "Basic NFT" },
        { label: "Subscription Period", value: "3 days" },
        { label: "Capacity (Steps)", value: "50,000" },
        { label: "Per Day Reward", value: "Up to 0.25%" },
        { label: "Sold", value: "4,270 NFT" },
      ],
    },
    {
      id: "specialfour3",
      title: "Premium Jogger",
      price: 30000,
      image: "images/nft/special/s3.jpeg",
      details: [
        { label: "Type", value: "Basic NFT" },
        { label: "Subscription Period", value: "3 days" },
        { label: "Capacity (Steps)", value: "50,000" },
        { label: "Per Day Reward", value: "Up to 0.25%" },
        { label: "Sold", value: "4,270 NFT" },
      ],
    },
  ];

  return (
    <div className="basic-nft-page">
      <div className="container py-5">
        <h1 className="text-center mb-4">Limited NFTs</h1>
        <div className="row g-4">
          {nftData.map((nft) => (
            <NFTCard key={nft.id} {...nft} modalId={nft.id} />
          ))}
        </div>
        <div className="modals">
          {nftData.map((nft) => (
            <Modal key={nft.id} id={nft.id} {...nft} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LimitedNFTs;

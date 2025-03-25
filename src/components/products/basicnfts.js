import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../styles/NFTStyles.css"; // Add your custom CSS styles here
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
              className="btn-close btn-close-white"
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
              onClick={handleNavigate}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Basicnft = () => {
  const nftData = [
    { id: "1", title: "WALKER", price: 25, image: "images/nft/basicnft1.jpeg", details: [
        { label: "Type", value: "Basic NFT" },
        { label: "Subscription Period", value: "1 Day" },
        { label: "Capacity (Steps)", value: "10,000" },
        { label: "Per Day Reward", value: "Up to 0.50%" },
        { label: "Sold", value: "4,270 NFT" },
      ]},
    { id: "2", title: "JOGGER", price: 50, image: "images/nft/basicnft2.jpeg", details: [
        { label: "Type", value: "Basic NFT" },
        { label: "Subscription Period", value: "1 Day" },
        { label: "Capacity (Steps)", value: "10,000" },
        { label: "Per Day Reward", value: "Up to 0.50%" },
        { label: "Sold", value: "4,270 NFT" },
      ]},
    { id: "3", title: "MARATHONER", price: 250, image: "images/nft/basicnft3.jpeg", details: [
        { label: "Type", value: "Basic NFT" },
        { label: "Subscription Period", value: "1 Day" },
        { label: "Capacity (Steps)", value: "10,000" },
        { label: "Per Day Reward", value: "Up to 0.50%" },
        { label: "Sold", value: "4,270 NFT" },
      ]},
    { id: "4", title: "SILVER WALKER", price: 500, image: "images/nft/basicnft4.jpeg", details: [
        { label: "Type", value: "Basic NFT" },
        { label: "Subscription Period", value: "1 Day" },
        { label: "Capacity (Steps)", value: "10,000" },
        { label: "Per Day Reward", value: "Up to 0.50%" },
        { label: "Sold", value: "4,270 NFT" },
      ]},
    { id: "5", title: "SILVER JOGGER", price: 750, image: "images/nft/basicnft5.jpeg", details: [
        { label: "Type", value: "Basic NFT" },
        { label: "Subscription Period", value: "1 Day" },
        { label: "Capacity (Steps)", value: "10,000" },
        { label: "Per Day Reward", value: "Up to 0.50%" },
        { label: "Sold", value: "4,270 NFT" },
      ]},
    { id: "6", title: "SILVER RUNNER", price: 1000, image: "images/nft/basicnft6.jpeg", details: [
        { label: "Type", value: "Basic NFT" },
        { label: "Subscription Period", value: "1 Day" },
        { label: "Capacity (Steps)", value: "10,000" },
        { label: "Per Day Reward", value: "Up to 0.50%" },
        { label: "Sold", value: "4,270 NFT" },
      ]},
    { id: "7", title: "SILVER MARATHONER", price: 1500, image: "images/nft/basicnft7.jpeg", details: [
        { label: "Type", value: "Basic NFT" },
        { label: "Subscription Period", value: "1 Day" },
        { label: "Capacity (Steps)", value: "10,000" },
        { label: "Per Day Reward", value: "Up to 0.50%" },
        { label: "Sold", value: "4,270 NFT" },
      ]},
    { id: "8", title: "LUXE WALKER", price: 2000, image: "images/nft/basicnft8.jpeg", details: [
        { label: "Type", value: "Basic NFT" },
        { label: "Subscription Period", value: "1 Day" },
        { label: "Capacity (Steps)", value: "10,000" },
        { label: "Per Day Reward", value: "Up to 0.50%" },
        { label: "Sold", value: "4,270 NFT" },
      ]},
    { id: "9", title: "LUXE JOGGER", price: 2500, image: "images/nft/basicnft9.jpeg", details: [
        { label: "Type", value: "Basic NFT" },
        { label: "Subscription Period", value: "1 Day" },
        { label: "Capacity (Steps)", value: "10,000" },
        { label: "Per Day Reward", value: "Up to 0.50%" },
        { label: "Sold", value: "4,270 NFT" },
      ]},
    { id: "10", title: "LUXE RUNNER", price: 3000, image: "images/nft/basicnft10.jpeg", details: [
        { label: "Type", value: "Basic NFT" },
        { label: "Subscription Period", value: "1 Day" },
        { label: "Capacity (Steps)", value: "10,000" },
        { label: "Per Day Reward", value: "Up to 0.50%" },
        { label: "Sold", value: "4,270 NFT" },
      ]},
    { id: "11", title: "LUXE MARATHONER", price: 4000, image: "images/nft/basicnft11.jpeg", details: [
        { label: "Type", value: "Basic NFT" },
        { label: "Subscription Period", value: "1 Day" },
        { label: "Capacity (Steps)", value: "10,000" },
        { label: "Per Day Reward", value: "Up to 0.50%" },
        { label: "Sold", value: "4,270 NFT" },
      ]},
      { id: "12", title: "BWN", price: 150, image: "images/nft/basicnft12.jpeg", details: [
          { label: "Type", value: "Basic NFT" },
          { label: "Subscription Period", value: "1 Day" },
          { label: "Capacity (Steps)", value: "10,000" },
          { label: "Per Day Reward", value: "Up to 0.50%" },
          { label: "Sold", value: "4,270 NFT" },
        ]},
      { id: "13", title: "BJN", price: 300, image: "images/nft/basicnft13.jpeg", details: [
          { label: "Type", value: "Basic NFT" },
          { label: "Subscription Period", value: "1 Day" },
          { label: "Capacity (Steps)", value: "10,000" },
          { label: "Per Day Reward", value: "Up to 0.50%" },
          { label: "Sold", value: "4,270 NFT" },
        ]},
      { id: "14", title: "BMN", price: 600, image: "images/nft/basicnft14.jpeg", details: [
          { label: "Type", value: "Basic NFT" },
          { label: "Subscription Period", value: "1 Day" },
          { label: "Capacity (Steps)", value: "10,000" },
          { label: "Per Day Reward", value: "Up to 0.50%" },
          { label: "Sold", value: "4,270 NFT" },
        ]},
      { id: "15", title: "BLWN", price: 900, image: "images/nft/basicnft15.jpeg", details: [
          { label: "Type", value: "Basic NFT" },
          { label: "Subscription Period", value: "1 Day" },
          { label: "Capacity (Steps)", value: "10,000" },
          { label: "Per Day Reward", value: "Up to 0.50%" },
          { label: "Sold", value: "4,270 NFT" },
        ]},
      { id: "16", title: "BLJN", price: 1400, image: "images/nft/basicnft16.jpeg", details: [
          { label: "Type", value: "Basic NFT" },
          { label: "Subscription Period", value: "1 Day" },
          { label: "Capacity (Steps)", value: "10,000" },
          { label: "Per Day Reward", value: "Up to 0.50%" },
          { label: "Sold", value: "4,270 NFT" },
        ]},
      { id: "17", title: "BLRN", price: 1800, image: "images/nft/basicnft17.jpeg", details: [
          { label: "Type", value: "Basic NFT" },
          { label: "Subscription Period", value: "1 Day" },
          { label: "Capacity (Steps)", value: "10,000" },
          { label: "Per Day Reward", value: "Up to 0.50%" },
          { label: "Sold", value: "4,270 NFT" },
        ]},
      { id: "18", title: "BLMN", price: 2300, image: "images/nft/basicnft18.jpeg", details: [
          { label: "Type", value: "Basic NFT" },
          { label: "Subscription Period", value: "1 Day" },
          { label: "Capacity (Steps)", value: "10,000" },
          { label: "Per Day Reward", value: "Up to 0.50%" },
          { label: "Sold", value: "4,270 NFT" },
        ]},
      { id: "19", title: "BSWN", price: 2800, image: "images/nft/basicnft19.jpeg", details: [
          { label: "Type", value: "Basic NFT" },
          { label: "Subscription Period", value: "1 Day" },
          { label: "Capacity (Steps)", value: "10,000" },
          { label: "Per Day Reward", value: "Up to 0.50%" },
          { label: "Sold", value: "4,270 NFT" },
        ]},
      { id: "20", title: "BSJN", price: 3200, image: "images/nft/basicnft20.jpeg", details: [
          { label: "Type", value: "Basic NFT" },
          { label: "Subscription Period", value: "1 Day" },
          { label: "Capacity (Steps)", value: "10,000" },
          { label: "Per Day Reward", value: "Up to 0.50%" },
          { label: "Sold", value: "4,270 NFT" },
        ]},
      { id: "21", title: "BSRN", price: 3600, image: "images/nft/basicnft21.jpeg", details: [
          { label: "Type", value: "Basic NFT" },
          { label: "Subscription Period", value: "1 Day" },
          { label: "Capacity (Steps)", value: "10,000" },
          { label: "Per Day Reward", value: "Up to 0.50%" },
          { label: "Sold", value: "4,270 NFT" },
        ]},
      { id: "22", title: "BSMN", price: 4100, image: "images/nft/basicnft22.jpeg", details: [
          { label: "Type", value: "Basic NFT" },
          { label: "Subscription Period", value: "1 Day" },
          { label: "Capacity (Steps)", value: "10,000" },
          { label: "Per Day Reward", value: "Up to 0.50%" },
          { label: "Sold", value: "4,270 NFT" },
        ]},
      { id: "23", title: "RUNNER", price: 400, image: "images/nft/basicnft23.jpeg", details: [
          { label: "Type", value: "Basic NFT" },
          { label: "Subscription Period", value: "1 Day" },
          { label: "Capacity (Steps)", value: "10,000" },
          { label: "Per Day Reward", value: "Up to 0.50%" },
          { label: "Sold", value: "4,270 NFT" },
        ]},
      { id: "24", title: "RUNNER", price: 400, image: "images/nft/basicnft24.jpeg", details: [
          { label: "Type", value: "Basic NFT" },
          { label: "Subscription Period", value: "1 Day" },
          { label: "Capacity (Steps)", value: "10,000" },
          { label: "Per Day Reward", value: "Up to 0.50%" },
          { label: "Sold", value: "4,270 NFT" },
        ]},
      ];

  return (
    <div className="basic-nft-page">
      <div className="container py-5">
        <h1 className="text-center mb-4">Basic NFTs</h1>
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

export default Basicnft;

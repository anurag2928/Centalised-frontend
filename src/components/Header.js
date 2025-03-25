import React from "react";
import logo from "../logo.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

  let navigate = useNavigate()
  
  function handleLogout(){
    sessionStorage.removeItem('token')
    navigate('/')
  }

  return (
    <header className="pt-1 pb-1">
      <div className="p-0 container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            {/* Logo */}
            <Link className="navbar-brand" to="/About">
              <img 
               src={logo}
               alt="Logo"
               style={{
                 height: "40px",
                 width: "auto",
                 objectFit: "contain",
               }}/>
            </Link>

            {/* Toggle Button */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navigation Items */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {/* About Us */}
                <li className="nav-item">
                  <Link
                    className="nav-link fw-semibold text-dark"
                    aria-current="page"
                    to="/About"
                  >
                    About Us
                  </Link>
                </li>

                {/* How it Works */}
                <li className="nav-item">
                  <Link
                    className="nav-link fw-semibold text-dark"
                    to="/howitwork"
                  >
                    How it works
                  </Link>
                </li>

                {/* Deposit Dropdown */}
                <li className="nav-item dropdown">
                  <button
                    className="nav-link fw-semibold text-dark dropdown-toggle"
                    id="depositDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Deposit
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="depositDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item fw-semibold text-dark"
                        to="/investment"
                      >
                        Investment
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item fw-semibold text-dark"
                        to="/deposit-history"
                      >
                        Deposit History
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Withdrawal Dropdown */}
                <li className="nav-item dropdown">
                  <button
                    className="nav-link fw-semibold text-dark dropdown-toggle"
                    id="withdrawalDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Withdrawal
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="withdrawalDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item fw-semibold text-dark"
                        to="/withdrawal-history"
                      >
                        Withdrawal History
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Crypto Trading */}
                <li className="nav-item">
                  <Link className="nav-link fw-semibold text-dark" to="/crypto">
                    Crypto trading
                  </Link>
                </li>
                

                {/* Products Dropdown */}
                <li className="nav-item dropdown">
                  <button
                    className="nav-link fw-semibold text-dark dropdown-toggle"
                    id="productsDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="productsDropdown"
                  >
                    <li>
                      <Link className="dropdown-item fw-semibold text-dark" to="/about">
                        Free NFTs
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item fw-semibold text-dark"
                        to="/basicnfts"
                      >
                        Basic NFTs
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item fw-semibold text-dark"
                        to="/limitednfts"
                      >
                        Limited NFTs
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item fw-semibold text-dark"
                        to="/specialnfts"
                      >
                        Special NFTs
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Wallet */}
                <li className="nav-item">
                  <Link className="nav-link fw-semibold text-dark" to="/wallet">
                    Wallet
                  </Link>
                </li>

                {/* Referral */}
                <li className="nav-item">
                  <Link className="nav-link fw-semibold text-dark" to="/referral">
                    Referral
                  </Link>
                </li>

                {/* News */}
                <li className="nav-item">
                  <Link className="nav-link fw-semibold text-dark" to="/news">
                    News
                  </Link>
                </li>

                {/* Contact Us */}
                <li className="nav-item">
                  <Link
                    className="nav-link fw-semibold text-dark"
                    to="/contactus"
                  >
                    Contact Us
                  </Link>
                </li>

                {/* Sign Up/Login */}
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn px-4 btn-primary"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

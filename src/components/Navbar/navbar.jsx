import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <Link to="/home" className="navbar-brand">
          <img src="./nav-icon.avif" alt="nav-icon" height="30" className="d-inline-block align-text-top" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/home" className="nav-link text-dark">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link text-dark">Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link text-dark">Cart</Link>
            </li>
            <li className="nav-item">
              <Link to="/stats" className="nav-link text-dark">Messi Stats</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-dark" type="button">
              Search
            </button>

            <div className="ms-3">
              <Link to="/cart" className="nav-link text-dark">
                <i className="fas fa-shopping-cart"></i>
              </Link>
            </div>

            <div className="ms-3">
              <Link to="/register" className="nav-link text-dark">
                <i className="fas fa-user"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

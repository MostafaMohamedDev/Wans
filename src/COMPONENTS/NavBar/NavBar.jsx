import React, { useState } from "react";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";

import "./NavBar.css";

const Navbar = () => {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  const handleSearchToggle = () => {
    setSearchExpanded(!searchExpanded);
  };

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const toggleShopDropdown = () => {
    setShopDropdownOpen(!shopDropdownOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid nav-contain">
        <div className="navbar-brand">
          <img
            className="nav navimg"
            src="Images/logo.png"
            alt="Description of the image"
          />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active home-link"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li
              className={`nav-item dropdown ${
                servicesDropdownOpen ? "show" : ""
              }`}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                onClick={toggleServicesDropdown}
                aria-expanded={servicesDropdownOpen}
              >
                Services
              </a>
              <ul
                className={`dropdown-menu ${
                  servicesDropdownOpen ? "show" : ""
                }`}
              >
                <li>
                  <a className="dropdown-item " href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
              </ul>
            </li>
            <li
              className={`nav-item dropdown ${
                shopDropdownOpen ? "show" : ""
              }`}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                onClick={toggleShopDropdown}
                aria-expanded={shopDropdownOpen}
              >
                Shop
              </a>
              <ul className={`dropdown-menu ${shopDropdownOpen ? "show" : ""}`}>
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active blog-link"
                aria-current="page"
                href="#"
              >
                Blog
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <div
              className={`nav-item search-input ${
                searchExpanded ? "expanded" : ""
              }`}
            >
              <a
                className={`nav-link nav-link-icon ${
                  searchExpanded ? "active" : ""
                }`}
                onClick={handleSearchToggle}
              >
                <FaSearch className="iccons" />
              </a>
              {searchExpanded && (
                <>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchInput}
                    placeholder="Search"
                    className="form-control ps-3 me-2"
                  />
                  {searchQuery && (
                    <span className="search-clear" onClick={clearSearch}>
                      &times;
                    </span>
                  )}
                </>
              )}
            </div>
          </form>
          <ul className="navbar-nav ms-lg-2">
            <li className="nav-item">
              <a className="nav-link pt-3 iccons" href="#">
                <FaShoppingCart className="mt-1" />
              </a>
            </li>
            <li className="nav-item navLog">
              <a className="nav-link" href="#">
                <h4 className="icon navtext  nav-link">
                  <i className="fas fa-user"></i>
                </h4>
                <h4 className="text navtext nav-link">Register - Log in</h4>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

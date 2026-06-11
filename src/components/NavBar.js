import React, { useState, useEffect } from "react";
import darkIcon from "./dark-mode.png";
import lightIcon from "./light-mode.png";
import { MdDarkMode, MdLightMode } from "react-icons/md";
const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Apply the theme to the body element
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label="Toggle Theme"
    >
      {darkMode ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
    </button>
  );
};

const NavBar = ({ setCategory, setCountry, toggleSidebar }) => {
  const handleCategoryChange = (category) => {
    setCategory(category);
  };
  const handleCountryChange = (country) => {
    console.log(country);
    setCountry(country);
  };
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="logo">
          Voice of India
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={toggleSidebar}
        >
          &#9776;
        </button>
        <ul className="nav-links">
          <li>
            <a href="#all" onClick={() => handleCategoryChange("general")}>
              Home
            </a>
          </li>
          <li>
            <a
              href="#Business"
              onClick={() => handleCategoryChange("business")}
            >
              Business
            </a>
          </li>
          <li>
            <a
              href="#Entertainment"
              onClick={() => handleCategoryChange("entertainment")}
            >
              Entertainment
            </a>
          </li>
          <li>
            <a href="#Health" onClick={() => handleCategoryChange("health")}>
              Health
            </a>
          </li>
          <li>
            <a href="#Science" onClick={() => handleCategoryChange("science")}>
              Science
            </a>
          </li>
          <li>
            <a href="#Sports" onClick={() => handleCategoryChange("sports")}>
              Sports
            </a>
          </li>
          <li>
            <a
              href="#Technology"
              onClick={() => handleCategoryChange("technology")}
            >
              Technology
            </a>
          </li>

          <select
            id="country-select"
            onChange={(e) => {
              handleCountryChange(e.target.value);
            }}
          >
            <option value="us">United States</option>
            <option value="in">India</option>
            <option value="gb">United Kingdom</option>
            <option value="ca">Canada</option>
            <option value="au">Australia</option>
          </select>
          <ThemeToggle />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

import React, { useState, useEffect } from "react";
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

const NavBar = ({ setCategory, setCountry, country, toggleSidebar }) => {
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
        <a href="/Voice-of-India" className="logo">
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
            value={country}
            onChange={(e) => {
              handleCountryChange(e.target.value);
            }}
          >
            <option value="in">India</option>
            <option value="us">United States</option>
            <option value="gb">United Kingdom</option>
            <option value="au">Australia</option>
            <option value="fr">France</option>
            <option value="ru">Russia</option>
          </select>
          <ThemeToggle />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

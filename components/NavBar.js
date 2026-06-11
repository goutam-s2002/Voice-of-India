import React from 'react';

const NavBar = ({ toggleTheme, toggleSidebar }) => {
    return (
        <nav className="navbar">
            <div className="container">
                <a href="/" className="logo">Voice of India</a>
                <button className="menu-toggle" aria-label="Toggle menu" onClick={toggleSidebar}>
                    &#9776;
                </button>
                <ul className="nav-links">
                    <li><a href="#all" data-category="general">Home</a></li>
                    <li><a href="#Business" data-category="business">Business</a></li>
                    <li><a href="#Entertainment" data-category="entertainment">Entertainment</a></li>
                    <li><a href="#Health" data-category="health">Health</a></li>
                    <li><a href="#Science" data-category="science">Science</a></li>
                    <li><a href="#Sports" data-category="sports">Sports</a></li>
                    <li><a href="#Technology" data-category="technology">Technology</a></li>
                    <li><a href="/about" data-category="about">About</a></li>
                    <select id="country-select" onChange={() => { /* apiCalling() logic */ }}>
                        <option value="us">United States</option>
                        <option value="in" selected>India</option>
                        <option value="gb">United Kingdom</option>
                        <option value="ca">Canada</option>
                        <option value="au">Australia</option>
                    </select>
                    <button id="toggleTheme" onClick={toggleTheme}>
                        <i className="bi bi-brightness-high"></i>
                    </button>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;

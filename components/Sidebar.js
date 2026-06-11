import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="close-sidebar" aria-label="Close sidebar" onClick={toggleSidebar}>
                &times;
            </button>
            <ul className="sidebar-links">
                <li><a href="#all" data-category="general">Home</a></li>
                <li><a href="#Business" data-category="business">Business</a></li>
                <li><a href="#Entertainment" data-category="entertainment">Entertainment</a></li>
                <li><a href="#Health" data-category="health">Health</a></li>
                <li><a href="#Science" data-category="science">Science</a></li>
                <li><a href="#Sports" data-category="sports">Sports</a></li>
                <li><a href="#Technology" data-category="technology">Technology</a></li>
                <li><a href="/about" data-category="about">About</a></li>
            </ul>
        </aside>
    );
};

export default Sidebar;

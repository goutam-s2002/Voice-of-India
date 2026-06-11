import React from 'react';
import NavBar from './NavBar';

<NavBar/>
const Sidebar = ({ isOpen, toggleSidebar ,setCategory}) => {
    const handleCategoryChange = (category) => {
        setCategory(category);
    };
    return (
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="close-sidebar" aria-label="Close sidebar" onClick={toggleSidebar}>
                &times;
            </button>
            <ul className="sidebar-links">
                <li><a href="#all" onClick={() => handleCategoryChange('general')}>Home</a></li>
                <li><a href="#Business" onClick={() => handleCategoryChange('business')}>Business</a></li>
                <li><a href="#Entertainment" onClick={() => handleCategoryChange('entertainment')}>Entertainment</a></li>
                <li><a href="#Health" onClick={() => handleCategoryChange('health')}>Health</a></li>
                <li><a href="#Science" onClick={() => handleCategoryChange('science')}>Science</a></li>
                <li><a href="#Sports" onClick={() => handleCategoryChange('sports')}>Sports</a></li>
                <li><a href="#Technology" onClick={() => handleCategoryChange('technology')}>Technology</a></li>
            </ul>
        </aside>
    );
};

export default Sidebar;

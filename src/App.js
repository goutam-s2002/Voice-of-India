import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import './App.css';

const App = () => {
    const [theme, setTheme] = useState('light');
    const [category, setCategory] = useState('general'); 
    const [country, setCountry] = useState('us'); 
    const [sidebarOpen, setSidebarOpen] = useState(false);
console.log(country);
   
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(prevMode => !prevMode);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className={`app ${theme}`}>
            <NavBar toggleTheme={toggleTheme} toggleSidebar={toggleSidebar} setCategory={setCategory} setCountry={setCountry} />
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} setCategory={setCategory} />
            <MainContent category={category} country={country}/>
            <Footer />
        </div>
    );
};

export default App;

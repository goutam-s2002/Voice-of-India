import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import './App.css';

const App = () => {
    const [category, setCategory] = useState('general'); 
    const [country, setCountry] = useState('in'); 
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="app">
            <NavBar toggleSidebar={toggleSidebar} setCategory={setCategory} setCountry={setCountry} country={country} />
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} setCategory={setCategory} />
            <MainContent category={category} country={country}/>
            <Footer />
        </div>
    );
};

export default App;

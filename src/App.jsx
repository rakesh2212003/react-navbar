import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';

import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Guide from './pages/Guide/Guide'
import Information from './pages/Information/Information'

const App = () => {
    return (
        <BrowserRouter>
            <Sidebar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/guide" element={<Guide />} />
                    <Route path="/information" element={<Information />} />
                </Routes>
            </Sidebar>
        </BrowserRouter>
    );
};

export default App;
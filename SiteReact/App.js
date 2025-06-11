import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Historia from './components/Historia';
import FaleConosco from './components/FaleConosco';
import "./css/styles.css"

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/historia" element={<Historia/>} />
                <Route path="/faleconosco" element={<FaleConosco/>} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
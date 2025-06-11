import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Shadow</h1>
            <nav>
                <Link to="/" >Home</Link>
                <Link to="/historia">História</Link>
                <Link to="/faleconosco">Fale Conosco</Link>
            </nav>
        </header>
    );
};

export default Header;
import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div className="navbar">
            <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/AnimalsPage">Animals Page</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
            </nav>
        
        </div>
    );
};

export default NavBar;
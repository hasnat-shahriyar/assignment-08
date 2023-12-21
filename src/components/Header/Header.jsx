import React from 'react';
import profile from "../../assets/images/profile.png";
import "./Header.css";
const Header = () => {
    return (
        <header>
            <h1 className='knowledge-title'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;
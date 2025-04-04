import React from "react";
import { useNavigate } from "react-router-dom";
import './navbar.css'
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="navbar">
            <h2>Taylor Swift</h2>
            <button className="logout-btn" onClick={() => navigate("/login")}>Login</button>
        </nav>
    );
};

export default Navbar;

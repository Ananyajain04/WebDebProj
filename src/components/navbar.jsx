import React from "react";
import { useNavigate } from "react-router-dom";
import './navbar.css'
const Navbar = () => {
    const navigate = useNavigate();
    const logout=()=>{
        alert("Logging out...");
        navigate('/');
    }
    return (
        <nav className="navbar">
            <h2>Taylor Swift</h2>
            <div className="nav-links">
                <span className="nav-item" onClick={() => navigate("/home")}>Home</span>
                <span className="nav-item" onClick={() => navigate("/albums")}>Albums</span>
                <span className="nav-item" onClick={() => navigate("/gamepage")}>Games</span>
            </div>
            <button className="logout-btn" onClick={logout}>Logout</button>
        </nav>
    );
};

export default Navbar;

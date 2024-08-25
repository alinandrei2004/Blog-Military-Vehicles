import React from "react";
import "../styles/navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-title">Navbar</div>
            <div className="items">
                <button className="navbar-item">Home</button>
                <button className="navbar-item">Catalog</button>
                <button className="navbar-item">Contact</button>
            </div>
        </div>
    );
}

export default Navbar;
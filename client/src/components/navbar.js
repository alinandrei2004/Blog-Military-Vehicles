import React from "react";
import "../styles/navbar.css";
import { ReactComponent as HomeIcon } from '../svgs/home.svg';
import { ReactComponent as LogInIcon } from '../svgs/logIn.svg';
import { ReactComponent as CatalogIcon } from '../svgs/photoAlbum.svg';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-title">Navbar</div>
            <div className="items">
                <button className="navbar-item">Home
                <HomeIcon width="24" height="24" />
                </button>
                <button className="navbar-item">Catalog
                <CatalogIcon width="24" height="24" />
                </button>
                <button className="navbar-item">Log In
                <LogInIcon width="24" height="24" />
                </button>
            </div>
        </div>
    );
}

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className="header d-flex">
        <h3>
            <Link to="/">
                Drone Maintenance
            </Link>
        </h3>
        <ul className="d-flex">
            <li>
                <Link to="/login">Sign in</Link>
            </li>
            <li>
                <Link to="/register">Sign up</Link>
            </li>
        </ul>
    </div>
    );
};

export default Header;
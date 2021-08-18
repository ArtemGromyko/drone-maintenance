import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Grid, Paper } from '@material-ui/core';

import './header.css';

const Header = () => {
    return (
        <Grid direction='row' container alignItems='baseline'>
            <h3>
                <Link to="/">
                    Drone Maintenance
                </Link>
            </h3>
            <div>
                <Link to="/login">Sign in</Link>
            </div>
            <div>
                <Link to="/register">Sign up</Link>
            </div>
        </Grid>
    );
};

export default Header;
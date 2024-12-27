import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link className='logo' to="/">RoadCamera</Link>
            <div className='links'>
                <Link className='link' to="/dashboard">Dashboard</Link>
                <Link className='link' to="/about">About</Link>
                <div className={styles.elips}></div>
            </div>
        </nav>
    );
};

export default Navbar;